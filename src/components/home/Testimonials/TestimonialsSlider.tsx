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
        className="md:absolute md:-top-11 md:left-5 xl:top-0 xl:left-0 mb-8 md:mb-0"
      />

      {/* Bottom Slider Card */}
      <Card
        data={bottomData}
        swiperRef={bottomSwiperRef}
        className="md:absolute md:-bottom-19.5 md:right-7 xl:bottom-0 xl:right-0 mb-8 md:mb-0"
      />

      {/* Button */}
      <div className="md:bg-[#CEE2FB] rounded-4xl md:max-w-145.5 xl:max-w-153 w-full md:h-93 xl:h-93 md:mx-auto xl:ml-16 xl:mt-43.5 xl:mb-35.5 relative flex justify-center z-0">
        <div className="md:absolute md:left-5 xl:left-3.5 md:bottom-5 xl:bottom-3.5 flex gap-3 w-fit">
          <button
            className="size-11.5 rounded-full bg-transparent border border-[#3D8FFF] transition-colors duration-500 ease-in-out group hover:bg-[#3D8FFF] hover:border-transparent flex justify-center items-center"
            onClick={() => {
              handlePrev();
            }}
          >
            <LeftArrow className="text-[#3D8FFF] group-hover:text-white transition-colors duration-500 ease-in-out" />
          </button>
          <button
            className="size-11.5 rounded-full bg-transparent border border-[#3D8FFF] transition-colors duration-500 ease-in-out group hover:bg-[#3D8FFF] hover:border-transparent flex justify-center items-center"
            onClick={() => {
              handleNext();
            }}
          >
            <LeftArrow className="text-[#3D8FFF] group-hover:text-white transition-colors duration-500 ease-in-out rotate-180" />
          </button>
        </div>
        <div className="size-18 bg-[#3D8FFF] rounded-full justify-center items-center md:absolute -top-9 right-13.5 xl:-top-5 xl:-right-2 hidden md:flex">
          <DoubleQuotes className="text-white !cursor-auto" />
        </div>
      </div>
    </>
  );
};
