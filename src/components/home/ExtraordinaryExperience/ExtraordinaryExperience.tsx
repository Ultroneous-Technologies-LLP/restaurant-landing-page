import { FC } from "react";

import { Container } from "@/components/common";

import { Video } from "./Video";
import { ExtraordinaryExperienceProps } from "./types";

export const ExtraordinaryExperience: FC<ExtraordinaryExperienceProps> = ({
  items,
  video,
  title,
}) => (
  <Container
    backgroundClassName="bg-primary-red relative"
    className="pt-20 pb-37 xl:pt-25 xl:pb-110 px-4 md:px-6 xl:px-18"
  >
    <h2 className="font-eugusto text-center text-white text-[32px]/12 xl:text-[50px]/15 max-w-89.5 md:max-w-64 mx-auto md:ml-0 md:mr-auto xl:max-w-99 pb-8 xl:pb-25">
      <span>{title}</span>
    </h2>
    <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12">
      {items.map(({ description, id, title }) => (
        <div className="xl:max-w-76 w-full" key={id}>
          <h3 className="font-eugusto text-white text-xl/7.5 xl:text-2xl/7.5 pb-2 xl:pb-2.5">
            <span>{title}</span>
          </h3>
          <p className="font-proximaNova text-white text-sm/5 xl:text-lg/7.5">
            <span>{description}</span>
          </p>
        </div>
      ))}
    </div>
    <div className="absolute left-1/2 -translate-x-1/2 -bottom-25 md:-bottom-75 xl:-bottom-88 w-full">
      <Video alt={video.alt} poster={video.poster} src={video.src} />
    </div>
  </Container>
);
