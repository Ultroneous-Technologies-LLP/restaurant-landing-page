import React, { JSX, SVGProps } from "react";

import { ICON_SIZE_0, ICON_SIZE_10, ICON_SIZE_18 } from "./constant";

export const Dropdown = ({
  width = ICON_SIZE_18,
  height = ICON_SIZE_10,
  ...svgProps
}: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    fill="none"
    height={height}
    role="img"
    viewBox={`${ICON_SIZE_0} ${ICON_SIZE_0} ${ICON_SIZE_18} ${ICON_SIZE_10}`}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <path
      d="M17 1.00007C17 1.00007 11.1081 9 9 9C6.89173 9 1 1 1 1"
      stroke="#EE4230"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);
