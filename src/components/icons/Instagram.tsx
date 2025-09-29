import { SVGProps } from "react";

export const Instagram = ({
  width = 20,
  height = 20,
  ...svgProps
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      role="img"
      {...svgProps}
    >
      <path
        d="M14.5 1H5.5C3.01472 1 1 3.01472 1 5.5V14.5C1 16.9853 3.01472 19 5.5 19H14.5C16.9853 19 19 16.9853 19 14.5V5.5C19 3.01472 16.9853 1 14.5 1Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6005 9.43327C13.7116 10.1823 13.5836 10.9473 13.2349 11.6194C12.8862 12.2915 12.3343 12.8365 11.658 13.177C10.9816 13.5174 10.2151 13.6359 9.46753 13.5156C8.71993 13.3953 8.0293 13.0423 7.49387 12.5069C6.95844 11.9715 6.60548 11.2809 6.48518 10.5333C6.36488 9.78567 6.48338 9.01918 6.82381 8.34281C7.16425 7.66644 7.70929 7.11464 8.3814 6.76589C9.05352 6.41714 9.8185 6.2892 10.5675 6.40027C11.3315 6.51357 12.0389 6.86959 12.585 7.41575C13.1312 7.96191 13.4872 8.66924 13.6005 9.43327Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9492 5.05078H14.9582"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
