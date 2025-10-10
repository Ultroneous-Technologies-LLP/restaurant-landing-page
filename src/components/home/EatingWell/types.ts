import { CtaButtonType, ImageTypes } from '@/types';

interface Images {
  food1: ImageTypes;
  food2: ImageTypes;
}

export interface EatingWellCard {
  id: number;
  icon: ImageTypes;
  title: string;
  description: string;
}

export interface EatingWellProps {
  images: Images;
  heading: string;
  description: string;
  cards: EatingWellCard[];
  cta: CtaButtonType;
}
