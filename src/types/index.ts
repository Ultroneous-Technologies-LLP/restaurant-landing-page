import { ButtonHTMLAttributes, ReactNode } from "react";

export type SocialIconNameType = "Dribble" | "Instagram" | "BeHance" | "LinkedIn";

type ButtonVariants = "primary" | "outline";

export interface ImageTypes {
  alt: string;
  id: number;
  src: string;
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
