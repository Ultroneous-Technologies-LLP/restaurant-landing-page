import { CtaButtonType, ImageTypes } from "@/types";

interface Images {
  food1: ImageTypes;
  food2: ImageTypes;
}

export interface EatingWellCard {
  description: string;
  icon: ImageTypes;
  id: number;
  title: string;
}

export interface EatingWellProps {
  cards: EatingWellCard[];
  cta: CtaButtonType;
  description: string;
  heading: string;
  images: Images;
}
