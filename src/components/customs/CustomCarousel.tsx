import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { picsList } from "@/assets/images/Images";
import { CustomSharePopover } from "./CustomSharePopover";
import { ToastContainer } from "react-toastify";
import { MeteoconsStarFill } from "@/assets/icons/Icon";
import { CustomContactPopover } from "./CustomContactPopover";

export function CustomCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const slideTo = (index: number) => {
    if (!api) {
      return;
    }
    api.scrollTo(index);
  };
  const handlePopoverClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <div>
      <ToastContainer />
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="w-full  basis-[20%] sm:basis-1/3 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-2 w-full">
                <Card
                  onClick={() => slideTo(index)}
                  className={`w-full z-10 cursor-pointer ${
                    index === current - 1 ? "bg-slate-200 dark:bg-slate-600" : "bg-white dark:bg-slate-700"
                  }  mx-auto shadow-md`}
                >
                  <CardContent className="flex flex-col w-full items-center justify-center p-6">
                    <div className="flex gap-5 flex-col w-full">
                      <div className="flex justify-between items-center w-full mb-4">
                        <div className="flex flex-col">
                          <div className="flex">
                            {Array.from({ length: 5 }).map(() => (
                              <MeteoconsStarFill className="w-6 h-6" />
                            ))}
                          </div>

                          <p className="text-[#162F66] font-['Angkor'] dark:text-white">Herdy Rostel Yoylou</p>
                        </div>

                        <img
                          className="rounded-full w-16 h-16"
                          src="https://i.pravatar.cc/300"
                        />
                      </div>
                      <div className="w-full text-[#162F66] font-['Angkor'] dark:text-white text-[10px] flex justify-between items-center">
                        <p className="flex flex-col">
                          Depuis <span className="text-sm">Dakar</span>
                        </p>
                        <p className="flex flex-col">
                          Pour <span className="text-sm">Pointe-noire</span>
                        </p>
                        <button className="rounded-xl text-sm dark:hover:bg-gray-600 hover:bg-slate-200 bg-transparent px-4 py-2 border border-slate-200 w-auto">
                          Voir plus
                        </button>
                      </div>
                      <div className="relative">
                        <img
                          className="rounded-md filter brightness-[.3] contrast-25"
                          src={picsList[0]}
                        />
                        <p className="absolute text-lg font-bold text-left ml-5 top-1/4 flex justify-center text-white">
                          Bonjour je voyage le 5/12/2024
                          <p className="absolute text-md font-bold mt-10 top-1/4 flex justify-center text-white text-left">
                          J'ai 5 kgs de plus à vendre contactez moi pour plus
                          d'informations
                        </p>
                        </p>
                     
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <div
                          onClick={(e) => handlePopoverClick(e)}
                          className="flex justify-end z-20"
                        >
                          <CustomSharePopover />
                        </div>
                        <div onClick={(e) => handlePopoverClick(e)}>
                          <CustomContactPopover />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center gap-2 mt-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            onClick={() => slideTo(index)}
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current - 1 ? "bg-[#10837F] dark:bg-[#10837F]" : ""
            } bg-slate-400 dark:bg-slate-600`}
          ></div>
        ))}
      </div>
    </div>
  );
}
