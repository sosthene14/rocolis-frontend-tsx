import { MeteoconsStarFill } from "@/assets/icons/Icon";
import { CustomContactPopover } from "@/components/customs/CustomContactPopover";
import { CustomSharePopover } from "@/components/customs/CustomSharePopover";
import { MouseEventHandler } from "react";

interface IProps {
  shareIndex?: (index: number) => void;
  index?: number;
  current?: number;
  handlePopoverClick?: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  picsList?: string[];
}

export default function CardAds({
  shareIndex,
  index,
  current,
  handlePopoverClick,
  picsList,
}: IProps) {
  return (
    <div className="p-2 w-full">
      <div
        onClick={() => shareIndex && index && shareIndex(index)}
        className={`w-[21rem] sm:w-full  cursor-pointer ${
          current && index === current - 1
            ? "bg-slate-200 dark:bg-slate-600"
            : "bg-white dark:bg-slate-700"
        } mx-auto shadow-md rounded-lg`}
      >
        <div className="flex flex-col w-full items-center justify-center p-4 sm:p-6">
          <div className="flex gap-3 sm:gap-5 flex-col w-full">
            <div className="flex justify-between items-center w-full mb-2 sm:mb-4">
              <div className="flex flex-col">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <MeteoconsStarFill
                      key={starIndex}
                      className="w-8 h-8 sm:w-8 sm:h-8"
                    />
                  ))}
                </div>
                <p className="text-[#162F66] font-['Angkor'] dark:text-white">
                  Herdy Rostel Yoylou
                </p>
              </div>
              <img
                className="rounded-full w-12 h-12 sm:w-16 sm:h-16"
                src="https://i.pravatar.cc/300"
              />
            </div>
            <div className="w-full text-[#162F66] font-['Angkor'] dark:text-white text-[8px] sm:text-[10px] flex justify-between items-center">
              <p className="flex flex-col">
                Depuis <span className="text-sm truncate text-ellipsis">Dakar</span>
              </p>
              <p className="flex flex-col">
                Pour <span className="text-sm truncate text-ellipsis">Pointe-noire</span>
              </p>
              <button
                className="rounded-xl text-xs sm:text-sm dark:hover:bg-gray-600 hover:bg-slate-200 bg-transparent px-2 py-1 sm:px-4 sm:py-2 border border-slate-200 w-auto"
                onClick={handlePopoverClick}
              >
                Voir plus
              </button>
            </div>
            <div className="relative">
              <img
                className="rounded-md filter brightness-[.3] contrast-25"
                src={picsList && picsList[0]}
              />
              <div className="absolute top-1/4 left-2 sm:left-5">
                <p className="text-lg sm:text-lg mb-2 font-bold text-left text-white">
                  Bonjour je voyage le 5/12/2024
                </p>
                <p className="text-sm sm:text-md font-bold text-white text-left">
                  J'ai 5 kgs de plus à vendre contactez moi pour plus
                  d'informations ...
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center w-full">
              <div
                onClick={(e) => handlePopoverClick && handlePopoverClick(e)}
                className="flex justify-end "
              >
                <CustomSharePopover />
              </div>
              <div onClick={(e) => handlePopoverClick && handlePopoverClick(e)}>
                <CustomContactPopover />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
