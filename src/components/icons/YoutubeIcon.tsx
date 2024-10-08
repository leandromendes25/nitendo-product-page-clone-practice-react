import * as React from "react";
import { SVGProps } from "react";

export const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    color="#fff"
    data-testid="YoutubeIcon"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      d="M31.33 8.3a4 4 0 0 0-2.83-2.83C26 4.8 16 4.8 16 4.8s-10 0-12.5.67A4 4 0 0 0 .67 8.3 41.51 41.51 0 0 0 0 16a41.51 41.51 0 0 0 .67 7.7 4 4 0 0 0 2.83 2.83c2.5.67 12.5.67 12.5.67s10 0 12.5-.67a4 4 0 0 0 2.83-2.83A41.51 41.51 0 0 0 32 16a41.51 41.51 0 0 0-.67-7.7zM12.8 20.8v-9.6l8.31 4.8z"
    />
  </svg>
);
