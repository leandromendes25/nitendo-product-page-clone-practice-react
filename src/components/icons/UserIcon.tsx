import * as React from "react";
import { SVGProps } from "react";
export const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    color="currentColor"
    data-testid="UserIcon"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      d="M16.22 19.41A9.71 9.71 0 1 1 26 9.7a9.74 9.74 0 0 1-9.8 9.71M1.84 32a10.88 10.88 0 0 1 10.94-10.74h6.57A10.88 10.88 0 0 1 30.29 32H1.84"
    />
  </svg>
);
