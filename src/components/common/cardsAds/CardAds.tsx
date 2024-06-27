import { EmojioneStar } from "@/assets/icons/Icon";
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

export const CardAds =({
  shareIndex,
  index,
  current,
  handlePopoverClick,
  picsList,
}: IProps)=> {
  return (
    <div className="p-2 w-full z-0">
      <div
        onClick={() => shareIndex && index && shareIndex(index)}
        className={`w-full max-w-xs cursor-pointer ${
          current && index === current - 1
            ? "bg-slate-200 dark:bg-slate-600"
            : "bg-slate-100 dark:bg-slate-700"
        } shadow-md rounded-lg transition-colors duration-300 transform dark:hover:bg-slate-600`}
      >
        <div className="flex flex-col items-center p-4 sm:p-5">
          <div className="flex gap-3 flex-col w-full">
            <div className="flex justify-between items-center w-full mb-3">
              <div className="flex flex-col">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <EmojioneStar
                      key={starIndex}
                      className="w-4 h-4 mb-2 sm:w-4 sm:h-4"
                    />
                  ))}
                </div>
                <p className="text-[#162F66] w-48 text-ellipsis truncate text-xs font-['Angkor'] dark:text-white">
                  Herdy Rostel Yoylou 
                </p>
              </div>
              <img
                className="rounded-full  w-10 h-10 sm:w-12 sm:h-12"
                src="https://i.pravatar.cc/300"
              />
            </div>
            <div className="w-full text-[#162F66] font-['Angkor'] dark:text-white text-xs sm:text-sm flex justify-between items-center">
              <p className="flex flex-col">
                Depuis <span className="text-xs w-20 text-ellipsis truncate">Dakar</span>
              </p>
              <p className="flex flex-col">
                Pour <span className="text-xs w-24 text-ellipsis truncate">Pointe-noire</span>
              </p>
              <button
                className="rounded-lg text-xs  dark:hover:bg-gray-600 hover:bg-slate-200 bg-transparent px-2 py-1 sm:px-3 sm:py-1.5 border border-slate-200"
                onClick={handlePopoverClick}
              >
                Voir plus
              </button>
            </div>
            <div className="relative w-full h-32 sm:h-40">
              <img
                className="rounded-md w-full h-full object-cover filter brightness-50"
                src={picsList && picsList[0]}
              />
              <div className="absolute mt-1 sm:mt-5 ml-2 top-0">
                <p className="text-md  font-bold text-white">
                  Bonjour je voyage le 5/12/2024
                </p>
                <p className="text-sm sm:text-base font-bold text-white">
                  J'ai 5 kgs de plus à vendre, cliquez pour plus d'informations ...
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center w-full mt-2">
              <div
                onClick={(e) => handlePopoverClick && handlePopoverClick(e)}
                className="flex"
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
