interface image {
  id: number;
  src: string;
  alt: string;
}

export interface HeroData {
  backgroundImage: {
    desktopImage: {
      src: string;
    };
    tabImage: {
      src: string;
    };
    mobileImage: {
      src: string;
    };
    alt:string;
  };
  heading: string;
  description: string;
  chefs: image[];
  extraChefCount?: number;
  storyImage: image;
  bottomImage: image;
  menuImage: image;
}

export interface homeLayoutTypes {
  heroSection: HeroData;
}
