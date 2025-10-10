import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/common";

import { ICONS } from "./constant";
import { FooterProps } from "./types";

export const Footer: FC<FooterProps> = ({ icon, navLinks, socialLinks }) => (
  <Container>
    <div className="mt-20 mx-4 mb-4 xl:mt-37.5 xl:mx-18 xl:mb-20 bg-black rounded-3xl xl:rounded-4xl py-12.5 xl:py-17">
      <Image
        src={icon.src}
        alt={icon.src}
        width={114}
        height={96}
        className="mx-auto w-15 h-13 xl:w-24 xl:h-28.5"
      />
      <div className="xl:pb-7.5 py-8 xl:pt-15.5 flex flex-col md:flex-row justify-center gap-6 xl:gap-20">
        {navLinks.map(({ id, links, title }) => (
          <Link
            href={links}
            key={id}
            title={title}
            className="text-2xl/7.5 font-eugusto text-white inline-block text-center hover:text-primary-red transition-colors duration-500 ease-in-out"
          >
            <span>{title}</span>
          </Link>
        ))}
      </div>
      <div className="flex gap-2 justify-center">
        {socialLinks.map(({ id, href, label, icon }) => {
          const Icon = ICONS[icon];
          return (
            <Link
              key={id}
              href={href}
              aria-label={label}
              className="size-12 rounded-full border border-white/30 flex justify-center items-center hover:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red group duration-500 ease-in-out transition-colors"
            >
              <Icon className="text-white group-hover:text-primary-red group-focus:text-primary-red duration-500 ease-in-out" />
            </Link>
          );
        })}
      </div>
    </div>
  </Container>
);
