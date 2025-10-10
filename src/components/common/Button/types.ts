import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariants = 'primary' | 'outline';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariants;
}
