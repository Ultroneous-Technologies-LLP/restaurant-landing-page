import { FC } from "react";
import Image from "next/image";

import { Button, Container } from "@/components/common";

import { EatingWellProps } from "./types";

export const EatingWell: FC<EatingWellProps> = ({
  cards,
  description,
  cta,
  heading,
  images,
}) => (
  <Container className="grid md:grid-cols-2 px-4 md:px-6 xl:px-18 pt-20 md:pt-30 xl:pt-37.5 gap-8 md:gap-12 xl:gap-28">
    <div className="max-w-150 w-full order-2 md:order-1">
      <div>
        <Image
          src={images.food1.src}
          alt={images.food1.alt}
          width={396}
          height={392}
          className="ml-auto mr-0 hidden md:block md:w-58 md:h-75 lg:w-99 lg:h-83 object-cover rounded-3xl"
        />
      </div>
      <div className="md:-mt-33 xl:-mt-40">
        <Image
          src={images.food2.src}
          alt={images.food2.alt}
          width={396}
          height={392}
          className="md:block md:w-58 md:h-75 lg:w-99 lg:h-83 object-cover rounded-3xl"
        />
      </div>
    </div>
    <div className="order-1 md:order-2">
      <h2 className="font-eugusto text-3xl/12 xl:text-5xl/15 max-w-95 w-full pb-2 xl:pb-7.5 text-center md:text-start">
        <span>{heading}</span>
      </h2>
      <p className="font-proximaNova text-sm/5 xl:text-lg/7.5 w-full pb-8 md:pb-4 xl:pb-6 text-[#717171] text-center md:text-start">
        <span>{description}</span>
      </p>
      <div className="space-y-2 md:space-y-4 xl:space-y-2">
        {cards.map((card) => (
          <div key={card.id} className="p-4 xl:p-5 bg-[#FFF4E4] rounded-xl">
            <h3 className="flex gap-2.5 items-center font-proximaNova font-bold text-base/6 xl:text-xl/5 pb-2.5 xl:pb-4">
              <Image
                src={card.icon.src}
                alt={card.icon.alt}
                width={30}
                height={26}
              />
              <span>{card.title}</span>
            </h3>
            <p className="font-proximaNova text-lg/5 xl:text-xl/7.5">
              <span>{card.description}</span>
            </p>
          </div>
        ))}
      </div>
      <div>
        <Button variant="outline" className="mt-4 xl:mt-10 px-11">
          {cta.label}
        </Button>
      </div>
    </div>
  </Container>
);
