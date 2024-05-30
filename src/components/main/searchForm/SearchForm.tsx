import { useEffect } from "react";
import { Departure } from "./Departure";
import { DepartureDate } from "./DepartureDate";
import { Destination } from "./Destination";
import {
  useDatePickerStore,
  useDepartureStore,
  useDestinationStore,
} from "@/store/store";
import { PlaneIcon } from "@/assets/icons/Icon";
import { gradientBtn } from "@/common/ClassNames";
import { checkDateFormat } from "@/lib/utils";
import { citiesList } from "@/constants/variables";

export const SearchForm = () => {
  const { date, _setDate } = useDatePickerStore();
  const { departure, setErrorDeparture } = useDepartureStore();
  const { destination, setErrorDestination } = useDestinationStore();

  useEffect(() => {
    departure &&
      departure?.length > 0 &&
      localStorage.setItem("departure", String(departure));
  }, [departure]);
  useEffect(() => {
    destination &&
      destination?.length > 0 &&
      localStorage.setItem("destination", String(destination));
  }, [destination]);
  useEffect(() => {
    localStorage.setItem("departureDate", String(date));
  }, [date]);

  const onSubmit = () => {
    const validDate = checkDateFormat(String(date));
    if (validDate.isLongDate) {
      _setDate("");
    }
    if (departure === null) {
      setErrorDeparture(true);
    }
    if (destination === null) {
      setErrorDestination(true);
    }
  };

  const SearchFormHeader = () => {
    return (
      <div className="text-neutral-900 justify-center text-base font-semibold font-['Montserrat'] flex gap-2 p-5 items-center ">
        <div className="hidden sm:flex">
          <PlaneIcon />
        </div>

        <p className="text-center">
          Trouver des vendeurs de kilos plus facilement
        </p>
      </div>
    );
  };
  return (
    <div
      className="bg-white py-5  rounded-xl -mt-20 w-[320px] md:w-[750px] lg:w-[1000px]  m-auto"
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
    >
      <SearchFormHeader />
      <div className="flex justify-center gap-8 flex-wrap p-5">
        <Departure datas={citiesList} />
        <Destination datas={citiesList} />
        <DepartureDate />
        <div>
          <button
            onClick={() => onSubmit()}
            className={`${gradientBtn} py-[15px]`}
          >
            Rechercher
          </button>
        </div>
      </div>
    </div>
  );
};
