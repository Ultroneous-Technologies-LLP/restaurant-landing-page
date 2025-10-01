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

interface Circle {
  image: image;
  circleText: string;
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

export interface QualityComesData {
  backgroundImage: image;
  heading: string;
  description: string;
  circle: Circle;
}

export interface Dish {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  alt: string;
}

export interface MostPopularDishesData {
  title: string;
  dishes: Dish[];
  cta: Cta;
}

interface ExperienceItem {
  id: number;
  title: string;
  description: string;
}

export interface VideoData {
  src: string;
  poster: string;
  alt: string;
}

export interface ExtraordinaryExperienceData {
  title: string;
  items: ExperienceItem[];
  video: VideoData;
}
interface TabItem {
  id: number;
  title: string;
  description: string;
  price: string;
}

interface TabContent {
  image: image;
  items: TabItem[];
}

export interface TabType {
  id: number;
  label: string;
  content: TabContent;
}

export interface TabProps {
  tabs: TabType[];
}

export interface OurSpecialMenuSection {
  title: string;
  tabs: TabType[];
}

export interface homeLayoutTypes {
  heroSection: HeroData;
  eatingWellSection: EatingWellData;
  extraordinaryExperienceSection: ExtraordinaryExperienceData;
  qualityComesSection: QualityComesData
  mostPopularDishesSection: MostPopularDishesData
  ourSpecialMenuSection:OurSpecialMenuSection
}
