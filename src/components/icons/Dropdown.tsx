import React, { SVGProps } from "react";

export const Dropdown = ({
  width = 18,
  height = 10,
  ...svgProps
}: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 18 10"
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    role="img"
    {...svgProps}
  >
    <path
      d="M17 1.00007C17 1.00007 11.1081 9 9 9C6.89173 9 1 1 1 1"
      stroke="#EE4230"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
