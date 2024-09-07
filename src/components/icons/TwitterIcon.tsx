import * as React from "react";
import { SVGProps } from "react";

export const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    color="#FFF"
    data-testid="TwitterIcon"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      d="M19.044 13.55 30.957 0h-2.823L17.79 11.765 9.53 0H0l12.493 17.79L0 32h2.823l10.923-12.424L22.471 32H32L19.044 13.55Zm-3.866 4.398-1.266-1.772L3.84 2.08h4.336l8.128 11.377 1.266 1.771 10.566 14.788h-4.337l-8.621-12.067Z"
    />
  </svg>
);
