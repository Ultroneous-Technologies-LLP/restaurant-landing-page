import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Container } from "@/components/common";

import { ICONS } from "./constant";
import { FooterProps } from "./types";

export const Footer: FC<FooterProps> = ({ icon, navLinks, socialLinks }) => (
  <Container>
    <div className="mx-4 mt-20 mb-4 rounded-3xl bg-black py-12.5 xl:mx-18 xl:mt-37.5 xl:mb-20 xl:rounded-4xl xl:py-17">
      <Image
        alt={icon.src}
        className="mx-auto h-13 w-15 xl:h-28.5 xl:w-24"
        height={96}
        src={icon.src}
        width={114}
      />
      <div className="flex flex-col justify-center gap-6 py-8 md:flex-row xl:gap-20 xl:pt-15.5 xl:pb-7.5">
        {navLinks.map(({ id, href, label }) => (
          <Link
            className="font-eugusto hover:text-primary-red inline-block text-center text-2xl/7.5 text-white transition-colors duration-500 ease-in-out"
            href={href}
            key={id}
            title={label}
          >
            <span>{label}</span>
          </Link>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {socialLinks.map(({ id, href, label, icon: socialLinksIcon }) => {
          const Icon = ICONS[`${socialLinksIcon}`];
          return (
            <Link
              aria-label={label}
              className="hover:border-primary-red focus:ring-primary-red group flex size-12 items-center justify-center rounded-full border border-white/30 transition-colors duration-500 ease-in-out focus:ring-2 focus:outline-none"
              href={href}
              key={id}
              target="_blank"
            >
              <Icon className="group-hover:text-primary-red group-focus:text-primary-red text-white duration-500 ease-in-out" />
            </Link>
          );
        })}
      </div>
    </div>
  </Container>
);
