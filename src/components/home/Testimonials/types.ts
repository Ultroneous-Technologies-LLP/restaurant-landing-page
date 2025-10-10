import type { Swiper as SwiperType } from 'swiper';

export interface CustomersSays {
  id: number;
  name: string;
  role: string;
  img: string;
  text: string;
}

export interface CardProps {
  data: CustomersSays[];
  swiperRef?: React.RefObject<SwiperType | null>;
  className?: string;
}

export interface TestimonialsSliderProps {
  data: CustomersSays[];
}

export interface TestimonialProps {
  title: string;
  description: string;
  longDescription: string;
  customersSays: CustomersSays[];
}
