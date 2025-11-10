import Image from "next/image";
import { FC } from "react";

import { Container, Title } from "@/components/common";

import { QualityComesProps } from "./types";

export const QualityComes: FC<QualityComesProps> = ({
  backgroundImage,
  circle,
  description,
  heading,
}) => (
  <Container className="px-4 pt-20 md:px-6 md:pt-30 xl:px-18 xl:pt-29">
    <div className="relative">
      <Image
        alt={backgroundImage.alt}
        className="h-155 md:h-180 xl:h-226.5"
        height={907}
        src={backgroundImage.src}
        width={1294}
      />
      <div className="absolute top-25 left-1/2 w-full -translate-x-1/2 px-4 md:top-20 md:px-0 xl:top-25">
        <Title className="pb-2 xl:pb-7.5" title={heading} />
        <p className="font-proximaNova mx-auto w-full pb-16 text-center text-sm/5 md:max-w-133 md:pb-12 xl:max-w-235.5 xl:pb-10 xl:text-lg/7.5">
          <span>{description}</span>
        </p>
        <div className="relative mx-auto flex size-52 items-center justify-center rounded-full bg-[#76C7FF] md:size-97.5 xl:size-128.5">
          <Image
            alt={circle.image.alt}
            className="z-10 h-31 w-22 md:h-58.5 md:w-41 xl:h-77.5 xl:w-54"
            height={311}
            src={circle.image.src}
            width={216}
          />
          <svg className="animate-spin-15 absolute h-[105%] w-[105%]" viewBox="0 0 300 300">
            <defs>
              <path
                d="M 150, 150m -120, 0 a 120,120 0 1,1 240,0a 120,120 0 1,1 -240,0"
                id="circlePath"
              />
            </defs>
            <text className="text-black uppercase" fontSize="10">
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
