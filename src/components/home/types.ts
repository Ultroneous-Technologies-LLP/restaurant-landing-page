interface image {
  id: number;
  src: string;
  alt: string;
}

interface Cta {
  label: string;
  href: string;
}

interface Src {
  src: string;
}

export interface HeroData {
  backgroundImage: {
    desktopImage: Src;
    tabImage: Src;
    mobileImage: Src;
    alt: string;
  };
  heading: string;
  description: string;
  chefs: image[];
  extraChefCount?: number;
  storyImage: image;
  bottomImage: image;
  menuImage: image;
}

export interface EatingWellCard {
  id: number;
  icon: image;
  title: string;
  description: string;
}

export interface EatingWellData {
  images: {
    food1: image;
    food2: image;
  };
  heading: string;
  description: string;
  cards: EatingWellCard[];
  cta: Cta;
}

export interface homeLayoutTypes {
  heroSection: HeroData;
  eatingWellSection: EatingWellData;
}
