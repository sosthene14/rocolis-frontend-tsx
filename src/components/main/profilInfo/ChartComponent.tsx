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
  ChartEvent,
  ActiveElement,
  Chart,
} from "chart.js";
import { IPublishAdd } from "@/components/interfaces/interfaces";
import { Modal } from "flowbite-react";
import { loadedDatas } from "@/mock/data";
import { EyeIcon } from "lucide-react";

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

export interface PublicationData {
  day: number;
  publications: number;
}

interface Props {
  data: { [year: string]: { [month: string]: PublicationData[] } };
}

const months = [
  { value: "01", label: "Janvier" },
  { value: "02", label: "Fevrier" },
  { value: "03", label: "Mars" },
  { value: "04", label: "Avril" },
  { value: "05", label: "Mai" },
  { value: "06", label: "Juin" },
  { value: "07", label: "Juillet" },
  { value: "08", label: "Août" },
  { value: "09", label: "Septembre" },
  { value: "10", label: "Octobre" },
  { value: "11", label: "Novembre" },
  { value: "12", label: "Decembre" },
];

const getYears = (data: {
  [year: string]: { [month: string]: PublicationData[] };
}) => {
  return Object.keys(data).map((year) => ({ value: year, label: year }));
};

const ChartComponent: React.FC<Props> = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [adsNumber, setAdsNumber] = useState<number>(0);

  const handleYearChange = (selectedOption: string | null) => {
    setSelectedYear(selectedOption);
    setSelectedMonth(null);
  };

  const handleMonthChange = (selectedOption: string | null) => {
    setSelectedMonth(selectedOption);
  };

  const getChartData = (): PublicationData[] => {
    console.log(selectedYear, selectedMonth);
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

  const getTotalPublications = (): number => {
    if (selectedYear && data[selectedYear]) {
      return Object.values(data[selectedYear])
        .flat()
        .reduce((total, dayData) => (total += dayData.publications), 0);
    }
    return 0;
  };

  const getTotalPublicationsMonth = (): number => {
    if (
      selectedYear &&
      selectedMonth &&
      data[selectedYear] &&
      data[selectedYear][selectedMonth]
    ) {
      return data[selectedYear][selectedMonth].reduce(
        (total, dayData) => (total += dayData.publications),
        0
      );
    }
    return 0;
  };

  const chartData = {
    labels: getChartData().map((d) => d.day),
    datasets: [
      {
        label: "Nombre de vues",
        data: getChartData().map((d) => d.publications),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    onClick: (_event: ChartEvent, elements: ActiveElement[], chart: Chart) => {
      console.log(elements, chart, _event);
      if (elements.length) {
        const { datasetIndex, index } = elements[0];
        const value = chart.data.datasets[datasetIndex].data[index];
        setAdsNumber(value as number);
        setOpenModal(true);
      }
    },

    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Publications de ${(selectedMonth &&
          months[Number(selectedMonth) - 1].label) ||
          ""} ${selectedYear || ""}`,
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
  };

  return (
    <div className="w-[90%] md:w-[500px] overflow-x-hidden">
      <div>
        <Select
          onValueChange={(value: string) => handleYearChange(value)}
          value={selectedYear as string}
        >
          <SelectTrigger
            className={`py-[22px] mb-3 border-none flex gap-2 items-center bg-slate-100 dark:bg-slate-700`}
          >
            <SelectValue>
              {selectedYear ? selectedYear : "Selectionez une année"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="dark:bg-slate-700 border-none">
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
            className={`py-[22px] border-none flex gap-2 items-center bg-slate-100 dark:bg-slate-700`}
            disabled={!selectedYear}
          >
            <SelectValue>
              {selectedMonth
                ? months[Number(selectedMonth) - 1].label
                : "Selectionez un mois"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="dark:bg-slate-700 border-none">
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
      <div className="mb-10">
        <div className="text-sm mt-5 flex items-center gap-2">
          <EyeIcon size={20} />
          <span>Total des vues pour l'année choisie :</span>
          <span className="font-semibold">{getTotalPublications()}</span>
        </div>
        <div className="text-sm mt-5 flex items-center gap-2">
          <EyeIcon size={20} />
          <span>Total des vues pour le mois choisi :</span>
          <span className="font-semibold">{getTotalPublicationsMonth()}</span>
        </div>
      </div>

      <div className="w-[350px] overflow-x-scroll md:w-[500px] h-auto ">
        <Line  data={chartData} options={options} />
      </div>
      <DataSeenChoosenDay
        adsNumber={adsNumber}
        ads={loadedDatas.slice(0, adsNumber)}
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </div>
  );
};

export default ChartComponent;

const DataSeenChoosenDay = ({
  ads,
  setOpenModal,
  openModal,
  adsNumber,
}: {
  ads: IPublishAdd[];
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  adsNumber: number;
}) => {
  return (
    <Modal
      dismissible
      show={openModal}
      size="5xl"
      popup
      onClose={() => setOpenModal(false)}
    >
      <Modal.Header className="dark:bg-slate-700  bg-slate-100 rounded-md" />
      <Modal.Body className="dark:bg-slate-700  text-sm  bg-slate-100 rounded-md">
        <div className="p-4 max-w-screen-lg  mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center">
            Annonces que les gens ont consultés le 12 janvier 2022
          </h2>
          <div className="mb-6 ">
            <div className=" text-sm text-center mb-2">
              Nombre total d'annonces :{" "}
              <span className="font-semibold">{ads.length}</span>
            </div>
          </div>
          <div className=" flex flex-wrap justify-between h-96">
            {ads.slice(0, adsNumber).map((ad, index) => (
              <div
                key={index}
                className="border h-min w-96 mx-auto rounded-lg p-4 mb-5 shadow-md bg-white dark:bg-slate-800"
              >
                <div className="flex justify-center gap-20  items-center mb-5">
                  <div className="text-xl font-semibold">{ad.travelerName}</div>
                  <div
                    className={`text-sm px-2 py-1 rounded ${
                      ad.isValided
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {ad.isValided ? "Active" : "Inactive"}
                  </div>
                </div>
                <div className="text-sm flex justify-between text-gray-600 dark:text-gray-400 mb-2">
                  <div className="flex items-center">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    <span>Publié le:</span>
                  </div>
                  <span className="font-semibold">
                    {ad.publicationDate as string}
                  </span>
                </div>
                <div className="text-sm flex justify-between text-gray-600 dark:text-gray-400 mb-2">
                  <div className="flex items-center">
                    <i className="fas fa-eye mr-2"></i>
                    <span>Nombre de vues:</span>
                  </div>
                  <span className="font-semibold">{ad.viewNumber}</span>
                </div>
                <div className="text-sm flex justify-between text-gray-600 dark:text-gray-400 mb-2">
                  <div className="flex items-center">
                    <i className="fas fa-plane-departure mr-2"></i>
                    <span>Ville de départ:</span>
                  </div>
                  <span className="font-semibold">{ad.departureCity}</span>
                </div>
                <div className="text-sm flex justify-between text-gray-600 dark:text-gray-400 mb-2">
                  <div className="flex items-center">
                    <i className="fas fa-plane-arrival mr-2"></i>
                    <span>Ville d'arrivée:</span>
                  </div>
                  <span className="font-semibold">{ad.destinationCity}</span>
                </div>
                <div className="text-sm flex justify-between text-gray-600 dark:text-gray-400 mb-2">
                  <div className="flex items-center">
                    <i className="fas fa-calendar-day mr-2"></i>
                    <span>Date de départ:</span>
                  </div>
                  <span className="font-semibold">
                    {ad.departureDate as string}
                  </span>
                </div>
                <div className="text-sm flex justify-between text-gray-600 dark:text-gray-400 mb-2">
                  <div className="flex items-center">
                    <i className="fas fa-calendar-check mr-2"></i>
                    <span>Date d'arrivée:</span>
                  </div>
                  <span className="font-semibold">
                    {ad.arrivalDate as string}
                  </span>
                </div>
                <div className="text-sm flex justify-between text-gray-600 dark:text-gray-400 mb-2">
                  <div className="flex items-center">
                    <i className="fas fa-phone-alt mr-2"></i>
                    <span>Téléphone:</span>
                  </div>
                  <span className="font-semibold">{ad.travelerPhone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="dark:bg-slate-700  text-sm  bg-slate-100 rounded-md" />
    </Modal>
  );
};
