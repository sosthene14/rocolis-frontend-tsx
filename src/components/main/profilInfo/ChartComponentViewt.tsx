import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ActiveElement,
  Chart,
} from "chart.js";
import { ChartEvent } from "node_modules/chart.js/dist/core/core.plugins";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export interface ViewData {
  day: number;
  views: number;
}

interface Props {
  data: { [year: string]: { [month: string]: ViewData[] } };
}

const months = [
  { value: "01", label: "Janvier" },
  { value: "02", label: "Février" },
  { value: "03", label: "Mars" },
  { value: "04", label: "Avril" },
  { value: "05", label: "Mai" },
  { value: "06", label: "Juin" },
  { value: "07", label: "Juillet" },
  { value: "08", label: "Août" },
  { value: "09", label: "Septembre" },
  { value: "10", label: "Octobre" },
  { value: "11", label: "Novembre" },
  { value: "12", label: "Décembre" },
];

const getYears = (data: { [year: string]: { [month: string]: ViewData[] } }) => {
  return Object.keys(data).map((year) => ({ value: year, label: year }));
};

const ChartComponentView: React.FC<Props> = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const handleYearChange = (selectedOption: string | null) => {
    setSelectedYear(selectedOption);
    setSelectedMonth(null);
  };

  const handleMonthChange = (selectedOption: string | null) => {
    setSelectedMonth(selectedOption);
  };

  const getChartData = (): ViewData[] => {
    if (
      selectedYear &&
      selectedMonth &&
      data[selectedYear] &&
      data[selectedYear][selectedMonth]
    ) {
      return data[selectedYear][selectedMonth];
    }
    return [];
  };

  const getTotalViews = (): number => {
    if (selectedYear && data[selectedYear]) {
      return Object.values(data[selectedYear])
        .flat()
        .reduce((total, dayData) => (total += dayData.views), 0);
    }
    return 0;
  };

  const chartData = {
    labels: getChartData().map((d) => d.day),
    datasets: [
      {
        label: "Nombre de vues",
        data: getChartData().map((d) => d.views),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Vues de ${selectedMonth && months[Number(selectedMonth) - 1].label || ""} ${selectedYear || ""}`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Jours du mois",
        },
      },
      y: {
        title: {
          display: true,
          text: "Nombre de vues",
        },
      },
    },
    
    onClick: (_event: ChartEvent, elements: ActiveElement[], chart: Chart) => {
      console.log(elements, chart,_event);
      if (elements.length) {
        const { datasetIndex, index } = elements[0];
        const value = chart.data.datasets[datasetIndex].data[index];
        console.log(value);
      }
    },
  };

  return (
    <div className="w-full h-[500px]">
      <div>
        <Select
          onValueChange={(value: string) => handleYearChange(value)}
          value={selectedYear as string}
        >
          <SelectTrigger
            className="py-[22px] border-none flex gap-2 items-center bg-slate-100 dark:bg-slate-600"
          >
            <SelectValue>
              {selectedYear ? selectedYear : "Sélectionner l'année"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="dark:bg-slate-600 border-none">
            {getYears(data).map(({ value, label }) => (
              <SelectItem
                key={value}
                value={value}
                onClick={() => handleYearChange(value)}
              >
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={selectedMonth as string}
          onValueChange={(value) => handleMonthChange(value)}
        >
          <SelectTrigger
            className="py-[22px] mt-2 border-none flex gap-2 items-center bg-slate-100 dark:bg-slate-600"
            disabled={!selectedYear}
          >
            <SelectValue>
              {selectedMonth
                ? months[Number(selectedMonth) - 1].label
                : "Sélectionner le mois"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="dark:bg-slate-600 border-none">
            {months.map(({ value, label }) => (
              <SelectItem
                key={value}
                value={value}
                onClick={() => handleMonthChange(value)}
              >
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="mt-2 text-sm">
        Total Vues: {getTotalViews()}
      </div>
      <div className="w-full h-[400px] flex justify-center">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ChartComponentView;
