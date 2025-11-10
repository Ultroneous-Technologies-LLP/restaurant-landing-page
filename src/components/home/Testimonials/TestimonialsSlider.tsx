"use client";

import { FC, useRef } from "react";
import { Swiper as SwiperType } from "swiper";

import { DoubleQuotes, LeftArrow } from "@/components/icons";

import { Card } from "./Card";
import { TestimonialsSliderProps } from "./types";

export const TestimonialsSlider: FC<TestimonialsSliderProps> = ({ data }) => {
  const topSwiperRef = useRef<SwiperType>(null);
  const bottomSwiperRef = useRef<SwiperType>(null);

  const mid = Math.ceil(data.length / 2);
  const topData = data.slice(0, mid);
  const bottomData = data.slice(mid);

  const handlePrev = () => {
    topSwiperRef.current?.slidePrev();
    bottomSwiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    topSwiperRef.current?.slideNext();
    bottomSwiperRef.current?.slideNext();
  };

  return (
    <>
      {/* Top Slider Card */}
      <Card
        data={topData}
        swiperRef={topSwiperRef}
        className="mb-8 md:absolute md:-top-11 md:left-5 md:mb-0 xl:top-0 xl:left-0"
      />

      {/* Bottom Slider Card */}
      <Card
        data={bottomData}
        swiperRef={bottomSwiperRef}
        className="mb-8 md:absolute md:right-7 md:-bottom-19.5 md:mb-0 xl:right-0 xl:bottom-0"
      />

      {/* Button */}
      <div className="relative z-0 flex w-full justify-center rounded-4xl md:mx-auto md:h-93 md:max-w-145.5 md:bg-[#CEE2FB] xl:mt-43.5 xl:mb-35.5 xl:ml-16 xl:h-93 xl:max-w-153">
        <div className="flex w-fit gap-3 md:absolute md:bottom-5 md:left-5 xl:bottom-3.5 xl:left-3.5">
          <button
            className="group flex size-11.5 items-center justify-center rounded-full border border-[#3D8FFF] bg-transparent transition-colors duration-500 ease-in-out hover:border-transparent hover:bg-[#3D8FFF]"
            onClick={() => {
              handlePrev();
            }}
          >
            <LeftArrow className="text-[#3D8FFF] transition-colors duration-500 ease-in-out group-hover:text-white" />
          </button>
          <button
            className="group flex size-11.5 items-center justify-center rounded-full border border-[#3D8FFF] bg-transparent transition-colors duration-500 ease-in-out hover:border-transparent hover:bg-[#3D8FFF]"
            onClick={() => {
              handleNext();
            }}
          >
            <LeftArrow className="rotate-180 text-[#3D8FFF] transition-colors duration-500 ease-in-out group-hover:text-white" />
          </button>
        </div>
        <div className="-top-9 right-13.5 hidden size-18 items-center justify-center rounded-full bg-[#3D8FFF] md:absolute md:flex xl:-top-5 xl:-right-2">
          <DoubleQuotes className="!cursor-auto text-white" />
        </div>
      </div>
    </>
  );
};
