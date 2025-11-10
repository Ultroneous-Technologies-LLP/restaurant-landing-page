import { FC } from "react";

import { Container, Title } from "@/components/common";

import { Video } from "./Video";
import { ExtraordinaryExperienceProps } from "./types";

export const ExtraordinaryExperience: FC<ExtraordinaryExperienceProps> = ({
  items,
  video,
  title,
}) => (
  <Container
    backgroundClassName="bg-primary-red relative"
    className="px-4 pt-20 pb-37 md:px-6 xl:px-18 xl:pt-25 xl:pb-110"
  >
    <Title
      title={title}
      className="mx-auto max-w-89.5 pb-8 text-white md:mr-auto md:ml-0 md:max-w-64 xl:max-w-99 xl:pb-25"
    />
    <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-12">
      {items.map(({ description, id, title }) => (
        <div className="w-full xl:max-w-76" key={id}>
          <h3 className="font-eugusto pb-2 text-xl/7.5 text-white xl:pb-2.5 xl:text-2xl/7.5">
            <span>{title}</span>
          </h3>
          <p className="font-proximaNova text-sm/5 text-white xl:text-lg/7.5">
            <span>{description}</span>
          </p>
        </div>
      ))}
    </div>
    <div className="absolute -bottom-25 left-1/2 w-full -translate-x-1/2 md:-bottom-75 xl:-bottom-88">
      <Video alt={video.alt} poster={video.poster} src={video.src} />
    </div>
  </Container>
);
