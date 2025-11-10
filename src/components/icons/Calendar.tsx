import { JSX, SVGProps } from "react";

import { ICON_SIZE_0, ICON_SIZE_20, ICON_SIZE_23 } from "./constant";

export const Calendar = ({
  width = ICON_SIZE_20,
  height = ICON_SIZE_23,
  ...svgProps
}: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    fill="none"
    height={height}
    role="img"
    viewBox={`${ICON_SIZE_0} ${ICON_SIZE_0} ${ICON_SIZE_20} ${ICON_SIZE_23}`}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <path
      d="M13.9981 1.5V5.50001M5.99805 1.5V5.50001M1 9.49998H19M11 3.49997H9.00001C5.22877 3.49997 3.34315 3.49997 2.17157 4.67154C1 5.84313 1 7.72874 1 11.5V13.5C1 17.2712 1 19.1569 2.17157 20.3284C3.34315 21.5 5.22877 21.5 9.00001 21.5H11C14.7712 21.5 16.6569 21.5 17.8284 20.3284C19 19.1569 19 17.2712 19 13.5V11.5C19 7.72874 19 5.84313 17.8284 4.67154C16.6569 3.49997 14.7712 3.49997 11 3.49997Z"
      stroke="#EE4230"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);
