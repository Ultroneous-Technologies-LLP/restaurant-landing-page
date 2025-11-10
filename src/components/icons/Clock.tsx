import { SVGProps } from "react";

export const Clock = ({ width = 22, height = 23, ...svgProps }: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 22 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    role="img"
    {...svgProps}
  >
    <path
      d="M8.5 9L11.9999 12.4996M15 7.5L10 12.5M21 11.5C21 17.0228 16.5228 21.5 11 21.5C5.47715 21.5 1 17.0228 1 11.5C1 5.97715 5.47715 1.5 11 1.5C16.5228 1.5 21 5.97715 21 11.5Z"
      stroke="#EE4230"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
