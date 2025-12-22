import clsx from "clsx";
import { FC } from "react";

import { ButtonProps } from "@/types";

export const Button: FC<ButtonProps> = ({ variant = "primary", className, children, ...rest }) => {
  const baseClass =
    "font-inter font-bold text-base/4 inline-block text-center transition-colors duration-500 ease-in-out rounded-4xl py-4.5";

  const variants = {
    primary: "bg-black text-white hover:bg-transparent hover:text-black border border-black",
    outline: "border border-black rounded-4xl hover:bg-black hover:text-white w-full md:w-fit",
  };

  const combinedClass = clsx(baseClass, variants[`${variant}`], className);

  return (
    <button {...rest} className={combinedClass}>
      {children}
    </button>
  );
};
