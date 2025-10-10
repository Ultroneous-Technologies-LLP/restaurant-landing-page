import { FC } from 'react';
import Image from 'next/image';

import { Container } from '@/components/common';

import { QualityComesProps } from './types';

export const QualityComes: FC<QualityComesProps> = ({
  backgroundImage,
  circle,
  description,
  heading,
}) => (
  <Container className="px-4 md:px-6 xl:px-18 pt-20 md:pt-30 xl:pt-29">
    <div className="relative">
      <Image
        src={backgroundImage.src}
        alt={backgroundImage.alt}
        width={1294}
        height={907}
        className="h-155 md:h-180 xl:h-226.5"
      />
      <div className="absolute top-25 md:top-20 xl:top-25 left-1/2 -translate-x-1/2 w-full px-4 md:px-0">
        <h2 className="font-eugusto text-3xl/12 xl:text-5xl/15 pb-2 xl:pb-7.5 text-center">
          <span>{heading}</span>
        </h2>
        <p className="font-proximaNova text-sm/5 xl:text-lg/7.5 pb-16 md:pb-12 xl:pb-10 text-center md:max-w-133 xl:max-w-235.5 w-full mx-auto">
          <span>{description}</span>
        </p>
        <div className="relative bg-[#76C7FF] size-52 md:size-97.5 xl:size-128.5 rounded-full mx-auto flex justify-center items-center">
          <Image
            src={circle.image.src}
            alt={circle.image.alt}
            width={216}
            height={311}
            className="z-10 w-22 h-31 md:w-41 md:h-58.5 xl:w-54 xl:h-77.5"
          />
          <svg viewBox="0 0 300 300" className="absolute w-[105%] h-[105%] animate-spin-15">
            <defs>
              <path
                id="circlePath"
                d="M 150, 150m -120, 0 a 120,120 0 1,1 240,0a 120,120 0 1,1 -240,0"
              />
            </defs>
            <text fontSize="10" className="uppercase text-black">
              <textPath href="#circlePath" startOffset="0%">
                {circle.circleText}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  </Container>
);
