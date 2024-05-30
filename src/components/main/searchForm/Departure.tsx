import { CustomSelect } from "@/components/customs/CustomSelect";
import { useEffect, useState } from "react";
import { useDepartureStore } from "@/store/store";

export const Departure = () => {
  const [departure, setDeparture] = useState("");
  const { _setDeparture, errorDeparture, setErrorDeparture } =
    useDepartureStore();
  const onChange = (value: string) => {
    _setDeparture(value);
  };
  useEffect(() => {
    if (localStorage.getItem("departure")) {
      setDeparture(localStorage.getItem("departure") || "");
    }
  }, []);
  return (
    <div className="relative flex items-center">
      <label
        style={{ color: "black", fontSize: "14px" }}
        htmlFor="floating_outlined"
        className="absolute text-neutral-900 rounded-md text-sm dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {"Ville de départ"}
      </label>
      <div onClick={() => setErrorDeparture(false)}>
        <CustomSelect
          classNameInput="mr-6 my-4 text-gray-500"
          notFoundText={`cette ville n'est pas disponnible`}
          label="departure"
          cityType="ville de départ"
          defaultvalue={departure}
          onChange={onChange}
          className={`${errorDeparture ? "border-red-400" : "border-slate-200"}
        border-2 transition-all hover:border-blue-500 hover:text-gray-500 flex bg-white dark:bg-slate-200  justify-between w-[250px] text-left placeholder:text-black/25 transition-duration: 75ms outline-none px-3 py-[23px] rounded-md text-zinc-900  text-sm font-bold font-['Montserrat']`}
        />
      </div>
    </div>
  );
};
