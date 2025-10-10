import { FC } from 'react';

import { Container } from '@/components/common';

import { TestimonialProps } from './types';
import { TestimonialsSlider } from './TestimonialsSlider';

export const Testimonials: FC<TestimonialProps> = ({
  description,
  longDescription,
  title,
  customersSays,
}) => (
  <Container
    backgroundClassName="bg-[#D6E8FF]"
    className="flex flex-col xl:flex-row justify-between gap-8 md:gap-18.5 xl:gap-36 py-20 md:pb-40 xl:py-30 px-4 md:px-6 xl:px-18 items-center"
  >
    <div className="w-full md:max-w-97.5 xl:max-w-fit xl:w-1/4 md:mx-auto xl:ml-0 xl:mr-auto">
      <h2 className="font-eugusto text-3xl/12 xl:text-5xl/15 pb-2 xl:pb-12.5 text-center xl:text-start">
        <span>{title}</span>
      </h2>
      <p className="font-eugusto text-xl/7.5 xl:text-2xl/7.5 pb-2 xl:pb-7.5 xl:max-w-46.5 w-full text-center xl:text-start">
        <span>{description}</span>
      </p>
      <p className="font-proximaNova text-sm/5 xl:text-lg/7.5 text-[#717171] text-center xl:text-start">
        <span>{longDescription}</span>
      </p>
    </div>
    <div className="w-full xl:w-3/4 relative">
      <TestimonialsSlider data={customersSays} />
    </div>
  </Container>
);
