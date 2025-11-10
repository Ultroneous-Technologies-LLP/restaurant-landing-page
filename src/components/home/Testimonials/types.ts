import type { Swiper as SwiperType } from "swiper";

export interface CustomersSays {
  id: number;
  img: string;
  name: string;
  role: string;
  text: string;
}

export interface CardProps {
  data: CustomersSays[];
  className?: string;
  swiperRef?: React.RefObject<SwiperType | null>;
}

export interface TestimonialsSliderProps {
  data: CustomersSays[];
}

export interface TestimonialProps {
  customersSays: CustomersSays[];
  description: string;
  longDescription: string;
  title: string;
}
