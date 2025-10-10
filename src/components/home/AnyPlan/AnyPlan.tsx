import clsx from 'clsx';
import { FC } from 'react';
import Image from 'next/image';

import { Button, Container } from '@/components/common';

import { AnyPlanProps } from './types';

export const AnyPlan: FC<AnyPlanProps> = ({ button, image, openingHour, title }) => (
  <Container className="py-20 md:py-30 xl:py-37.5 px-4 md:px-6 xl:px-18 md:grid md::grid-cols-2 md:gap-x-12 xl:gap-x-27.5 md:auto-rows-auto items-center">
    <div className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 h-fit md:max-w-87.5 xl:max-w-136.5 xl:w-full">
      <h2 className="font-eugusto text-3xl/12 xl:text-5xl/15 text-center md:text-start">
        <span>{title}</span>
      </h2>
    </div>
    <div className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 py-8 md:py-0">
      <Image src={image.src} alt={image.alt} width={558} height={492} className="mx-auto" />
    </div>
    <div className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">
      <p className="font-eugusto text-xl/7.5 xl:text-2xl/7.5 pb-4 md:pb-6 xl:pb-7.5">
        <span>{openingHour.title}</span>
      </p>
      <div className="space-y-5 pb-8 md:pb-6 xl:pb-9">
        {openingHour.openingHours.map(({ day, id, timing }, index) => {
          const isLastIndex = index === openingHour.openingHours.length - 1;
          return (
            <div
              className={clsx('flex justify-between font-proximaNova text-sm/5 xl:text-lg/7.5', {
                'text-primary-red': isLastIndex,
                'text-black': !isLastIndex,
              })}
              key={id}
            >
              <span>{day}</span>
              <span>{timing}</span>
            </div>
          );
        })}
      </div>
      <Button variant="outline" className="md:px-6 xl:px-11">
        {button.label}
      </Button>
    </div>
  </Container>
);
