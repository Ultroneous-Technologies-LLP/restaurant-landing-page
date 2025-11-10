import { FC } from "react";
import Image from "next/image";

import { Container, ModalButton, Title } from "@/components/common";

import { HeroSectionProps } from "./types";

export const Hero: FC<HeroSectionProps> = ({
  backgroundImage,
  bottomImage,
  chefs,
  description,
  heading,
  storyImage,
  extraChefCount,
  button,
}) => (
  <Container className="relative">
    <div className="px-4 pt-1">
      <picture>
        <source srcSet={backgroundImage.mobileImage.src} media="(max-width: 767px)" />
        <source srcSet={backgroundImage.tabImage.src} media="(max-width: 1024px)" />
        <img
          src={backgroundImage.desktopImage.src}
          alt={backgroundImage.alt}
          className="mx-auto h-204.5 w-full md:h-122.5 lg:h-150 xl:h-204.5"
        />
      </picture>
    </div>
    <div className="absolute top-22.5 flex w-fit flex-col items-end gap-12 px-4 md:top-27 md:flex-row md:gap-2 xl:top-39.5 xl:left-22 xl:gap-15 xl:pr-5 xl:pl-0">
      <div className="relative">
        <Title title={heading} isMainTitle />
        <div className="relative">
          <div className="ml-29.5 pt-11 md:ml-45 md:pt-19 xl:ml-40.5 xl:pt-18">
            <div>
              <div className="border-l border-white pl-5 xl:pl-12">
                <p className="font-proximaNova w-full max-w-50 text-sm/5 text-white lg:max-w-101.5 lg:text-xl/7.5">
                  <span>{description}</span>
                </p>
                <div className="flex -space-x-2.5 pt-1 xl:pt-4.5">
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
                    <div className="font-eugusto flex size-6 items-center justify-center rounded-full border border-white bg-black text-sm/5 text-white xl:size-10 xl:text-xl/5">
                      <span>+{extraChefCount}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="pl-5 xl:pl-12">
                <ModalButton variant="primary" className="mt-4 px-6 xl:mt-10.5 xl:px-11">
                  {button.label}
                </ModalButton>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 z-0 xl:-left-25">
              <Image
                src={bottomImage.src}
                alt={bottomImage.alt}
                width={451}
                height={195}
                className="relative z-0 mx-auto w-40 md:w-60 xl:h-fit xl:w-fit"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative w-fit md:w-73.5 lg:w-100 xl:w-full">
          <Image
            src={storyImage.src}
            alt={storyImage.alt}
            width={487}
            height={571}
            className="mx-auto h-91.5 w-78 md:h-86.5 md:w-73.5 lg:h-auto lg:w-100 xl:h-142.5 xl:w-121.5"
          />
        </div>
      </div>
    </div>
  </Container>
);
