import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariants = "primary" | "outline";

export interface ImageTypes {
  id: number;
  src: string;
  alt: string;
}

export interface CtaButtonType {
  label: string;
  href?: string;
}
export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariants;
}
