import { FC } from "react";
import Image from "next/image";

import { Button, Container } from "@/components/common";

import { HeroSectionProps } from "./types";

export const Hero: FC<HeroSectionProps> = ({
  backgroundImage,
  bottomImage,
  chefs,
  description,
  heading,
  storyImage,
  extraChefCount,
  menuImage,
  button,
}) => (
  <Container className="relative">
    <div className="pt-1 px-4">
      <picture>
        <source
          srcSet={backgroundImage.mobileImage.src}
          media="(max-width: 767px)"
        />
        <source
          srcSet={backgroundImage.tabImage.src}
          media="(max-width: 1024px)"
        />
        <img
          src={backgroundImage.desktopImage.src}
          alt={backgroundImage.alt}
          className="mx-auto h-204.5 md:h-122.5 lg:h-150 xl:h-204.5 w-full"
        />
      </picture>
    </div>
    <div className="absolute top-22.5 md:top-27 xl:top-39.5 flex flex-col items-end md:flex-row gap-13.5 md:gap-2 xl:gap-15 xl:left-22 w-fit px-4 xl:pl-0 xl:pr-5">
      <div className="relative">
        <h1 className="font-eugusto text-5xl/12 lg:text-7xl/18 xl:text-[100px]/30 text-white xl:max-w-166 w-full xl:pt-9 mx-auto text-center md:text-start md:pl-7.5 xl:pl-0">
          <span>{heading}</span>
        </h1>
        <div className="relative">
          <div className="pt-11 md:pt-19 xl:pt-18 ml-29.5 md:ml-45 xl:ml-40.5">
            <div>
              <div className="border-l border-white pl-5 xl:pl-12">
                <p className="font-proximaNova text-sm/5 lg:text-xl/7.5 text-white md:max-w-50 lg:max-w-101.5 w-full">
                  <span>{description}</span>
                </p>
                <div className="pt-5 flex -space-x-2.5">
                  {chefs.map(({ alt, id, src }) => (
                    <div key={id}>
                      <Image
                        src={src}
                        alt={alt}
                        width={40}
                        height={40}
                        className="size-6 xl:size-10"
                      />
                    </div>
                  ))}
                  {extraChefCount && (
                    <div className="size-6 xl:size-10 bg-black border border-white rounded-full font-eugusto text-sm/5 xl:text-xl/5 text-white flex justify-center items-center">
                      <span>+{extraChefCount}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="pl-5 xl:pl-12">
                <Button
                  variant="primary"
                  className="px-6 xl:px-11 mt-4 xl:mt-10.5"
                >
                  {button.label}
                </Button>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 xl:-left-25 z-0">
              <Image
                src={bottomImage.src}
                alt={bottomImage.alt}
                width={451}
                height={195}
                className="mx-auto relative z-0 w-40 md:w-60 xl:w-fit xl:h-fit"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative w-fit xl:w-full mx-auto md:w-73.5 lg:w-100">
          <Image
            src={storyImage.src}
            alt={storyImage.alt}
            width={487}
            height={571}
            className="mx-auto w-78 h-91.5 md:w-73.5 md:h-86.5 lg:w-100 lg:h-auto xl:w-121.5 xl:h-142.5"
          />
          <Image
            src={menuImage.src}
            alt={menuImage.alt}
            width={113}
            height={113}
            className="mx-auto absolute bottom-13 lg:bottom-22 xl:bottom-20 left-2 lg:left-4 xl:left-3 animate-spin-slow size-18 xl:size-28"
          />
        </div>
      </div>
    </div>
  </Container>
);
