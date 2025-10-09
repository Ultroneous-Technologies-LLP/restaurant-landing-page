import { SVGProps } from "react";

export const Calendar = ({
  width = 20,
  height = 23,
  ...svgProps
}: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    role="img"
    {...svgProps}
  >
    <path
      d="M13.9981 1.5V5.50001M5.99805 1.5V5.50001M1 9.49998H19M11 3.49997H9.00001C5.22877 3.49997 3.34315 3.49997 2.17157 4.67154C1 5.84313 1 7.72874 1 11.5V13.5C1 17.2712 1 19.1569 2.17157 20.3284C3.34315 21.5 5.22877 21.5 9.00001 21.5H11C14.7712 21.5 16.6569 21.5 17.8284 20.3284C19 19.1569 19 17.2712 19 13.5V11.5C19 7.72874 19 5.84313 17.8284 4.67154C16.6569 3.49997 14.7712 3.49997 11 3.49997Z"
      stroke="#EE4230"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
