import { useEffect, useRef, useState } from "react";
import { picsList } from "@/assets/images/Images";
import { ToastContainer } from "react-toastify";
import { CardAds } from "../common/cardsAds/CardAds";
import Slider from "react-slick";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

export function CustomCarousel() {
  const [current] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const handlePopoverClick = (event: React.MouseEvent) => {
    if (sliderRef.current) sliderRef.current.slickPause();
    event.stopPropagation();
  };
  const play = () => {
    if (sliderRef.current) sliderRef.current.slickPlay();
  };

  useEffect(() => {
    play();
  }, []);
  const [, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    pauseOnHover: true,

    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (_current: number, next: number) => setSlideIndex(next),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 1,
          dots: true,
          centerMode: true,
          initialSlide: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          centerMode: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          centerMode: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <div className="">
      <ToastContainer />

      <div className="slider-container relative overflow-y-hidden h-96">
        <Slider
          arrows={false}
          className="h-[500px] overflow-y-hidden"
          ref={sliderRef}
          dotsClass="hidden flex gap-5"
          {...settings}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <>
              <CardAds
                key={index}
                index={index}
                current={current}
                shareIndex={() => {}}
                handlePopoverClick={handlePopoverClick}
                picsList={picsList}
              />
            </>
          ))}
        </Slider>

        <div className=" mx-auto -mt-24 sm:mt-10 w-[10%] sm:w-[30%] flex justify-between">
          <ArrowLeftCircle
            size={35}
            className="hover:bg-opacity-50 cursor-pointer left-0 -translate-y-1/2  flex justify-between items-center rounded-full hover:bg-slate-700 transition-all duration-75"
            onClick={() => sliderRef.current?.slickPrev()}
          />
          <ArrowRightCircle
            size={35}
            className="hover:bg-opacity-50 cursor-pointer  right-0  -translate-y-1/2  flex justify-between items-center rounded-full hover:bg-slate-700 transition-all duration-75"
            onClick={() => sliderRef.current?.slickNext()}
          />
        </div>
      </div>
    </div>
  );
}
