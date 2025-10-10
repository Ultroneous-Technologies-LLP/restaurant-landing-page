'use client';

import 'swiper/css';
import 'swiper/css/effect-fade';

import clsx from 'clsx';
import { FC } from 'react';
import Image from 'next/image';
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CardProps } from './types';

export const Card: FC<CardProps> = ({ data, swiperRef, className }) => (
  <div
    className={clsx(
      'overflow-hidden w-full max-w-129 md:max-w-107.5 xl:max-w-129 rounded-4xl z-10',
      className,
    )}
  >
    <Swiper
      modules={[EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={2000}
      onSwiper={(swiper) => {
        if (swiperRef) swiperRef.current = swiper;
      }}
      slidesPerView={1}
    >
      {data.map(({ id, img, name, role, text }) => {
        return (
          <SwiperSlide key={id}>
            <div className="bg-white shadow-[0_6px_10px_0_#0000000D] max-w-129 md:max-w-107.5 xl:max-w-129 w-full mx-auto rounded-4xl p-6 xl:p-7.5 h-full">
              <div className="flex gap-4 xl:gap-5 items-center pb-6 xl:pb-8">
                <Image src={img} alt={name} width={64} height={64} className="size-14 xl:size-16" />
                <div>
                  <h3 className="font-proximaNova text-base/4 xl:text-xl/7.5 font-bold">
                    <span>{name}</span>
                  </h3>
                  <p className="font-proximaNova text-sm/5 xl:text-xl/7.5 text-[#717171]">
                    <span>{role}</span>
                  </p>
                </div>
              </div>
              <p className="bg-[#CEE1FB] p-4 xl:pt-4 xl:pr-10.5 xl:pb-8 xl:pl-7 rounded-2xl xl:rounded-xl text-sm/5 xl:text-lg/7.5 font-proximaNova">
                <span>{text}</span>
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>
);
