import clsx from "clsx";
import { FC } from "react";
import Image from "next/image";

import { Container, ModalButton, Title } from "@/components/common";

import { AnyPlanProps } from "./types";

export const AnyPlan: FC<AnyPlanProps> = ({ button, image, openingHour, title }) => (
  <Container className="md::grid-cols-2 items-center px-4 py-20 md:grid md:auto-rows-auto md:gap-x-12 md:px-6 md:py-30 xl:gap-x-27.5 xl:px-18 xl:py-37.5">
    <div className="h-fit md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:max-w-87.5 xl:w-full xl:max-w-136.5">
      <Title title={title} className="md:text-start" />
    </div>
    <div className="py-8 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 md:py-0">
      <Image src={image.src} alt={image.alt} width={558} height={492} className="mx-auto" />
    </div>
    <div className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">
      <h3 className="font-eugusto pb-4 text-xl/7.5 md:pb-6 xl:pb-7.5 xl:text-2xl/7.5">
        <span>{openingHour.title}</span>
      </h3>
      <div className="space-y-5 pb-8 md:pb-6 xl:pb-9">
        {openingHour.openingHours.map(({ day, id, timing }, index) => {
          const isLastIndex = index === openingHour.openingHours.length - 1;
          return (
            <div
              className={clsx("font-proximaNova flex justify-between text-sm/5 xl:text-lg/7.5", {
                "text-primary-red": isLastIndex,
                "text-black": !isLastIndex,
              })}
              key={id}
            >
              <span>{day}</span>
              <span>{timing}</span>
            </div>
          );
        })}
      </div>
      <ModalButton variant="outline" className="md:px-6 xl:px-11">
        {button.label}
      </ModalButton>
    </div>
  </Container>
);
