import { FC } from "react";

import { Container, Title } from "@/components/common";

import { TestimonialProps } from "./types";
import { TestimonialsSlider } from "./TestimonialsSlider";

export const Testimonials: FC<TestimonialProps> = ({
  description,
  longDescription,
  title,
  customersSays,
}) => (
  <Container
    backgroundClassName="bg-[#D6E8FF]"
    className="flex flex-col items-center justify-between gap-8 px-4 py-20 md:gap-18.5 md:px-6 md:pb-40 xl:flex-row xl:gap-36 xl:px-18 xl:py-30"
  >
    <div className="w-full md:mx-auto md:max-w-97.5 xl:mr-auto xl:ml-0 xl:w-1/4 xl:max-w-fit">
      <Title title={title} className="pb-2 xl:pb-12.5 xl:text-start" />
      <h3 className="font-eugusto w-full pb-2 text-center text-xl/7.5 xl:max-w-46.5 xl:pb-7.5 xl:text-start xl:text-2xl/7.5">
        <span>{description}</span>
      </h3>
      <p className="font-proximaNova text-dark-silver text-center text-sm/5 xl:text-start xl:text-lg/7.5">
        <span>{longDescription}</span>
      </p>
    </div>
    <div className="relative w-full xl:w-3/4">
      <TestimonialsSlider data={customersSays} />
    </div>
  </Container>
);
