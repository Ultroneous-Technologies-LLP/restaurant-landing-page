"use client";

import clsx from "clsx";
import { FC } from "react";

import { TitleProps } from "./types";

export const Title: FC<TitleProps> = ({ as = "h2", isMainTitle = false, title, className }) => {
  const Component = isMainTitle ? "h1" : as;

  const baseStyle = "font-eugusto";

  const variantStyles = {
    h1: "text-5xl/12 lg:text-7xl/18 xl:text-[100px]/30 text-white max-w-77.5 xl:max-w-166 w-full xl:pt-9 mx-auto md:pl-7.5 xl:pl-0",
    h2: "text-32px/12 xl:text-5xl/15 text-center",
  };

  return (
    <Component className={clsx(baseStyle, variantStyles[Component], className)}>
      <span>{title}</span>
    </Component>
  );
};
