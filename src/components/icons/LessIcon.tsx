import * as React from "react";
import { SVGProps } from "react";
const LessIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    color="currentColor"
    data-testid="MinusIcon"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M0 12h32v8H0z"
      clipRule="evenodd"
    />
  </svg>
);
export default LessIcon;
