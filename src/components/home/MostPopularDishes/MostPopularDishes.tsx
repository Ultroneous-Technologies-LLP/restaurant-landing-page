import Image from "next/image";
import { FC } from "react";

import { Cart } from "@/components/icons";
import { Container, Title } from "@/components/common";

import { MostPopularDishesProps } from "./types";

export const MostPopularDishes: FC<MostPopularDishesProps> = ({ dishes, title }) => (
  <Container className="px-4 py-20 md:px-6 md:py-30 xl:px-18 xl:py-37.5">
    <Title title={title} className="pb-8 xl:pb-25" />
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {dishes.map(({ alt, description, id, image, price, title }) => (
        <div
          key={id}
          className="relative mx-auto w-full max-w-89.5 rounded-[30px] bg-[url('/assets/images/card-bg.avif')] bg-cover bg-center bg-no-repeat px-3 pt-3 pb-5 xl:max-w-101.5 xl:px-4 xl:pt-4"
        >
          <div className="group relative overflow-hidden rounded-3xl">
            <Image
              src={image}
              alt={alt}
              width={375}
              height={248}
              className="h-auto w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#E63A28]/0 transition-colors duration-500 ease-in-out group-hover:bg-[#E63A28]/30" />
          </div>
          <h3 className="font-eugusto pt-3 pb-1 text-xl/7.5 xl:pt-10 xl:pb-2.5 xl:text-2xl/6">
            <span>{title}</span>
          </h3>
          <p className="font-proximaNova text-dark-silver w-full max-w-70.5 pb-5 text-sm/5 xl:text-lg/7.5">
            <span>{description}</span>
          </p>
          <p className="font-proximaNova text-lg/4.5 font-bold text-[#E63A28]">
            <span>{price}</span>
          </p>
          <div
            className="hover:bg-primary-red absolute right-3 bottom-1 flex size-12 cursor-pointer items-center justify-center rounded-full bg-black transition-colors duration-500 
            ease-in-out xl:right-2.5 xl:bottom-2.5 xl:size-13.5"
          >
            <Cart className="text-white" />
          </div>
        </div>
      ))}
    </div>
  </Container>
);
