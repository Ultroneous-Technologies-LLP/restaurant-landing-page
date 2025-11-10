"use client";

import "swiper/css";

import clsx from "clsx";
import { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { CardProps } from "./types";

export const Card: FC<CardProps> = ({ data, swiperRef, className }) => (
  <div
    className={clsx("z-10 w-full max-w-129 overflow-hidden md:max-w-107.5 xl:max-w-129", className)}
  >
    <Swiper
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={2000}
      onSwiper={(swiper) => {
        if (swiperRef) swiperRef.current = swiper;
      }}
      slidesPerView={1}
      spaceBetween={10}
    >
      {data.map(({ id, img, name, role, text }) => {
        return (
          <SwiperSlide key={id}>
            <div className="mx-auto h-full w-full max-w-129 rounded-4xl bg-white p-6 shadow-[0_6px_10px_0_#0000000D] md:max-w-107.5 xl:max-w-129 xl:p-7.5">
              <div className="flex items-center gap-4 pb-6 xl:gap-5 xl:pb-8">
                <Image src={img} alt={name} width={64} height={64} className="size-14 xl:size-16" />
                <div>
                  <h4 className="font-proximaNova text-base/4 font-bold xl:text-xl/7.5">
                    <span>{name}</span>
                  </h4>
                  <p className="font-proximaNova text-dark-silver text-sm/5 xl:text-xl/7.5">
                    <span>{role}</span>
                  </p>
                </div>
              </div>
              <p className="font-proximaNova rounded-2xl bg-[#CEE1FB] p-4 text-sm/5 xl:rounded-xl xl:pt-4 xl:pr-10.5 xl:pb-8 xl:pl-7 xl:text-lg/7.5">
                <span>{text}</span>
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>
);
