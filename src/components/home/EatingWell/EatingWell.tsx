import Image from "next/image";
import { FC } from "react";

import { Container, ModalButton, Title } from "@/components/common";

import { EatingWellProps } from "./types";

export const EatingWell: FC<EatingWellProps> = ({ cards, description, cta, heading, images }) => (
  <Container className="grid gap-8 px-4 pt-20 md:grid-cols-2 md:gap-12 md:px-6 md:pt-30 xl:gap-28 xl:px-18 xl:pt-37.5">
    <div className="order-2 w-full md:order-1 md:max-w-150">
      <div>
        <Image
          alt={images.food1.alt}
          className="mr-0 ml-auto hidden rounded-3xl object-cover md:block md:h-75 md:w-58 lg:h-83 lg:w-99"
          height={392}
          src={images.food1.src}
          width={396}
        />
      </div>
      <div className="md:-mt-33 xl:-mt-40">
        <Image
          alt={images.food2.alt}
          className="mx-auto rounded-3xl object-cover md:mr-auto md:ml-0 md:block md:h-75 md:w-58 lg:h-83 lg:w-99"
          height={392}
          src={images.food2.src}
          width={396}
        />
      </div>
    </div>
    <div className="order-1 md:order-2">
      <Title
        className="mx-auto w-full max-w-95 pb-2 md:mr-auto md:ml-0 md:text-start xl:pb-7.5"
        title={heading}
      />
      <p className="font-proximaNova text-dark-silver w-full pb-8 text-center text-sm/5 md:pb-4 md:text-start xl:pb-6 xl:text-lg/7.5">
        <span>{description}</span>
      </p>
      <div className="space-y-2 md:space-y-4 xl:space-y-2">
        {cards.map((card) => (
          <div className="rounded-xl bg-[#FFF4E4] p-4 xl:p-5" key={card.id}>
            <h3 className="font-proximaNova flex items-center gap-2.5 pb-2.5 text-base/6 font-bold xl:pb-4 xl:text-xl/5">
              <Image alt={card.icon.alt} height={26} src={card.icon.src} width={30} />
              <span>{card.title}</span>
            </h3>
            <p className="font-proximaNova text-lg/5 xl:text-xl/7.5">
              <span>{card.description}</span>
            </p>
          </div>
        ))}
      </div>
      <div>
        <ModalButton className="mt-4 px-11 xl:mt-10" variant="outline">
          {cta.label}
        </ModalButton>
      </div>
    </div>
  </Container>
);
