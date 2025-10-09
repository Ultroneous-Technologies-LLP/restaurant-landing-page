import { SVGProps } from "react";

export const Cross = ({
  width = 26,
  height = 26,
  ...svgProps
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    fill="none"
    role="img"
    viewBox="0 0 26 26"
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <path
      d="M1 1L25 25M1 25L25 1"
      stroke="#CECCCA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
