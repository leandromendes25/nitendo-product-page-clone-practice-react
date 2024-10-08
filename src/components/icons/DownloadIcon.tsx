import * as React from "react";
import { SVGProps } from "react";
export const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    color="white"
    data-testid="DownloadIcon"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.3 19.4v5.3c0 .5.5.9 1 .9h21.4c.5 0 1-.5 1-.9v-5.3H32v6.3c-.2 2.2-2.1 4-4.4 4H4.2c-2.3 0-4.2-1.8-4.2-4v-6.3h4.3zM17.9 2.2v12.2l5-4.8 2.8 2.8-9.8 9.9L6 12.5l2.6-2.8 5.2 4.8V2.2h4.1z"
      clipRule="evenodd"
    />
  </svg>
);
