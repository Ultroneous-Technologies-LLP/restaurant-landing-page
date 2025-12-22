"use client";

import clsx from "clsx";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

import { Container } from "@/components/common";

import { HeaderTextEnum } from "./enum";

const SCROLL_Y_20 = 20;

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > SCROLL_Y_20);
    };
    window.addEventListener("scroll", handleScroll);
    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Main Navigation"
      className={clsx(
        "fixed top-0 left-1/2 z-50 mx-auto w-full -translate-x-1/2 transition-colors duration-700 ease-in-out",
        !isScrolled ? "bg-transparent" : "bg-white/50 shadow-md backdrop-blur-[22px]"
      )}
      role="navigation"
    >
      <Container className="flex items-center justify-between px-4 py-2 md:pr-11.5 md:pl-8 xl:py-8 xl:pr-17 xl:pl-18">
        <p className="font-JomolHari text-lg/6 text-black md:text-3xl/6.5 xl:text-[40px]/10">
          <span>{HeaderTextEnum.FODO}</span>
        </p>
        <Link
          className="font-inter rounded-full bg-black p-1.5 text-xs/3 font-bold text-white uppercase transition-colors duration-500 ease-in-out hover:bg-[#EE4230] md:px-4 md:py-3 xl:px-11 xl:py-4.5 
        xl:text-base/4"
          href="#menu"
        >
          <span>{HeaderTextEnum.MENU}</span>
        </Link>
      </Container>
    </nav>
  );
};
