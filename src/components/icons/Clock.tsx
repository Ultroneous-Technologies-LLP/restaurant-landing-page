import { JSX, SVGProps } from "react";

import { ICON_SIZE_0, ICON_SIZE_22, ICON_SIZE_23 } from "./constant";

export const Clock = ({
  width = ICON_SIZE_22,
  height = ICON_SIZE_23,
  ...svgProps
}: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    fill="none"
    height={height}
    role="img"
    viewBox={`${ICON_SIZE_0} ${ICON_SIZE_0} ${ICON_SIZE_22} ${ICON_SIZE_23}`}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <path
      d="M8.5 9L11.9999 12.4996M15 7.5L10 12.5M21 11.5C21 17.0228 16.5228 21.5 11 21.5C5.47715 21.5 1 17.0228 1 11.5C1 5.97715 5.47715 1.5 11 1.5C16.5228 1.5 21 5.97715 21 11.5Z"
      stroke="#EE4230"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </svg>
);
