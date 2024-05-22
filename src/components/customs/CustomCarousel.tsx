import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { picsList } from "@/assets/images/Images";
import { ToastContainer } from "react-toastify";
import CardAds from "../common/cardsAds/CardAds";

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

  const handlePrevious = () => {
    if (!api) {
      return;
    }
    api.scrollPrev();
  };

  const handleNext = () => {
    if (!api) {
      return;
    }
    api.scrollNext();
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
      >
        <CarouselContent>
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-[20%] sm:basis-1/3 md:basis-1/3 lg:basis-1/4"
            >
             <CardAds index={index} current={current} shareIndex={()=>slideTo(index)} handlePopoverClick={handlePopoverClick} picsList={picsList} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex  justify-center gap-2 mt-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            onClick={() => slideTo(index)}
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current - 1
                ? "bg-[#10837F] dark:bg-[#10837F]"
                : "bg-slate-400 dark:bg-white"
            }`}
          ></div>
        ))}
        <svg
          onClick={handlePrevious}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className=" absolute cursor-pointer w-10 h-10 sm:w-12 sm:h-12 bg-slate-400 dark:bg-slate-400 -mt-[300px] left-3 text-white p-2 rounded-full z-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>

        <svg
          onClick={handleNext}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className=" absolute cursor-pointer w-10 h-10 sm:w-12 sm:h-12 bg-slate-400 dark:bg-slate-400 -mt-[300px] right-3 text-white p-2 rounded-full z-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
}
