"use client";

import Link from "next/link";
import Image from "next/image";
import { FC, useState } from "react";

import { Cart } from "@/components/icons";
import { Container } from "@/components/common";
import { useScreenSize } from "@/hooks/useScreenSize";

import { XL_BREAKPOINT } from "./constant";
import { MostPopularDishesData } from "../types";

export const MostPopularDishes: FC<MostPopularDishesData> = ({
  dishes,
  title,
  cta,
}) => {
  const [showAll, setShowAll] = useState(false);
  const width = useScreenSize();

  const isXL = width !== null && width > XL_BREAKPOINT;

  const visibleDishes =
    width === null
      ? dishes
      : isXL
      ? dishes
      : showAll
      ? dishes
      : dishes.slice(0, 2);

  return (
    <Container className="px-4 md:px-6 xl:px-18 py-20 md:py-30 xl:py-37.5">
      <h2 className="font-eugusto text-3xl/12 xl:text-5xl/15 pb-8 xl:pb-25 text-center">
        <span>{title}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {visibleDishes.map(({ alt, description, id, image, price, title }) => (
          <div
            key={id}
            className="px-3 pt-3 xl:px-4 xl:pt-4 pb-5 w-full max-w-[358px] xl:max-w-[407px] rounded-[30px] bg-[url('/assets/images/card-bg.avif')] bg-center bg-cover bg-no-repeat relative mx-auto"
          >
            <div className="relative">
              <Image
                src={image}
                alt={alt}
                width={375}
                height={248}
                className="object-cover object-center mx-auto"
              />
              <div className="hover:bg-[#E63A28]/25 absolute inset-0 transition-colors duration-500 ease-in-out rounded-3xl pointer-events-none" />
            </div>
            <h3 className="font-eugusto text-xl/7.5 xl:text-2xl/6 pt-3 pb-1 xl:pt-10 xl:pb-2.5">
              <span>{title}</span>
            </h3>
            <p className="font-proximaNova text-sm/5 xl:text-lg/7.5 pb-5 max-w-70.5 w-full text-[#717171]">
              <span>{description}</span>
            </p>
            <p className="font-proximaNova text-lg/4.5 text-[#E63A28] font-bold">
              <span>{price}</span>
            </p>
            <div
              className="cursor-pointer size-12 xl:size-13.5 rounded-full flex justify-center items-center bg-black hover:bg-[#E83C2A] transition-colors duration-500 ease-in-out absolute 
            xl:bottom-2.5 xl:right-2.5 bottom-1 right-3"
            >
              <Cart className="text-white" />
            </div>
          </div>
        ))}
      </div>
      <div className="pt-8 xl:pt-10 flex justify-center">
        {!isXL && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="py-4.5 px-11 border border-black inline-block rounded-4xl text-base/4 font-bold font-inter hover:bg-black hover:text-white transition-colors duration-500 ease-in-out w-full md:w-fit text-center xl:hidden"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
        {isXL && (
          <Link
            href={cta.href}
            className="hidden xl:inline-block py-4.5 px-11 border border-black rounded-4xl text-base/4 font-bold font-inter hover:bg-black hover:text-white transition-colors duration-500 ease-in-out text-center"
          >
            <span>{cta.label}</span>
          </Link>
        )}
      </div>
    </Container>
  );
};
