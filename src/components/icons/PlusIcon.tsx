import * as React from "react";
import { SVGProps } from "react";
const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    color="currentColor"
    data-testid="PlusIcon"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M32.04 12h-12V0h-8v12h-12v8h12v12h8V20h12v-8z"
    />
  </svg>
);
export default PlusIcon;
