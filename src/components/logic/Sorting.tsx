import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortingOptions } from "@/constants/variables";
import { IPublishAdd } from "../interfaces/interfaces";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { convertToDate } from "@/lib/utils";
  
const sortByDateRecentToOld = (a: IPublishAdd, b: IPublishAdd): number =>
    convertToDate(a.departureDate as string)!.getTime() - convertToDate(b.departureDate as string)!.getTime();
  
  const sortByDateOldToRecent = (a: IPublishAdd, b: IPublishAdd): number =>
    convertToDate(b.departureDate as string)!.getTime() - convertToDate(a.departureDate as string)!.getTime();
  const sortByKilosAvailableMaxMin = (a: IPublishAdd, b: IPublishAdd): number =>
    a.availableKilos - b.availableKilos;
  
  const sortByKilosAvailableMinMax = (a: IPublishAdd, b: IPublishAdd): number =>
    b.availableKilos - a.availableKilos;
  
  const sortByPriceHighToLow = (a: IPublishAdd, b: IPublishAdd): number =>
    b.kilosPrice - a.kilosPrice;
  
  const sortByPriceLowToHigh = (a: IPublishAdd, b: IPublishAdd): number =>
    a.kilosPrice - b.kilosPrice;
  
export const Sorting = ({ data,setSortedData }: { data: IPublishAdd[], setSortedData: React.Dispatch<React.SetStateAction<IPublishAdd[]>> }) => {
  const [selectedFilter, setSelectedFilter] = useLocalStorage("sortingOption","");
  const { departureDate } = useParams();
  const sortData = () => {
    switch (selectedFilter) {
        case "prix-kilo-croissant":
            return data.slice().sort(sortByPriceLowToHigh);
      case "prix-kilo-décroissant":
        return data.slice().sort( sortByPriceHighToLow);

      case "depart-imminents":
        return data.slice().sort(sortByDateRecentToOld);
      case "depart-non-imminents":
        return data.slice().sort(sortByDateOldToRecent);
      case "nombre-kilos-croissants":
        return data.slice().sort(sortByKilosAvailableMaxMin);
      case "nombre-kilos-décroissants":
        return data.slice().sort(sortByKilosAvailableMinMax);
      case "date-recherchee":
        return data.slice().sort((a, b) => {
          const aDepartureDate = new Date(a.departureDate as string);
          const bDepartureDate = new Date(b.departureDate as string);
          const urlDepartureDate = new Date(departureDate as string);
          const aIsDepartureDateMatch =
            aDepartureDate.getTime() === urlDepartureDate.getTime();
          const bIsDepartureDateMatch =
            bDepartureDate.getTime() === urlDepartureDate.getTime();
          if (aIsDepartureDateMatch && !bIsDepartureDateMatch) {
            return -1;
          }
          if (!aIsDepartureDateMatch && bIsDepartureDateMatch) {
            return 1;
          }
          return 0;
        });
      default:
        return data;
    }
  };

  useEffect(() => {
    setSortedData(sortData());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter]);

  return (
    <div className="flex flex-center items-center overflow-y-visible">
      <Select value={selectedFilter} onValueChange={(e) => setSelectedFilter(e)}>
        <SelectTrigger
          className={`py-[22px] border-none overflow-y-visible flex gap-2 items-center bg-slate-100 dark:bg-slate-700`}
        >
          <SelectValue placeholder="Trier " />
        </SelectTrigger>
        <SelectContent  className="dark:bg-slate-700 border-none">
          {sortingOptions.map(
            (
              sortingOption: { value: string; label: string },
              index: number
            ) => (
              <SelectItem key={index} value={sortingOption.value}>
                {sortingOption.label}
              </SelectItem>
            )
          )}
        </SelectContent>
      </Select>
    </div>
  );
};
