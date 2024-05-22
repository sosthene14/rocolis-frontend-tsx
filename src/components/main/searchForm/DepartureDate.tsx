import CustomDatePicker from "@/components/customs/CustomDatePicker";
import {
  formatedDayJsDate,
  getCurrentDateSlashFormat,
  isDateValidSlashed,
  slashedFormatedDate,
  unslashedFormatedDate,
} from "@/lib/utils";
import { useDatePickerStore } from "@/store/store";

export default function DepartureDate() {
  const { _setDate } = useDatePickerStore();
  const minDate = getCurrentDateSlashFormat();
  const dateFromLsg = localStorage.getItem("departureDate");
  const convertedDate = slashedFormatedDate(dateFromLsg as string);
  const isDateValide = isDateValidSlashed(convertedDate as string);
  const formatedDayjs = formatedDayJsDate(convertedDate as string);

  return (
    <div>
      <form>
        <div className="relative flex items-center">
          <CustomDatePicker
            className="border-2 cursor-pointer hover:bg-slate-200 font-bold bg-white dark:bg-slate-200 outline-none border-slate-200 py-3 rounded-md placeholder:text-zinc-900 text-zinc-900 text-opacity-60 text-sm font-['Montserrat']"
            placeholder="Date de départ"
            minDate={minDate}
            defaultValue={
              isDateValide ? (formatedDayjs as unknown as Date) : undefined
            }
            onChange={(_date: Date, dateString: string | string[]) =>
              _setDate(unslashedFormatedDate(String(dateString)))
            }
          />
          <label
            style={{ color: "black", fontSize: "14px" }}
            htmlFor="floating_outlined"
            className="absolute text-neutral-900 text-sm dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Date départ
          </label>
        </div>
      </form>
    </div>
  );
}
