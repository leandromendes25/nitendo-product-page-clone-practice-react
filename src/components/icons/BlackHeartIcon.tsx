import * as React from "react";
import { SVGProps } from "react";
export const BlackHeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    color="currentColor"
    data-testid="HeartIcon"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22.3 1.3c-2.3 0-4.5 1-6.3 2.8-1.7-1.8-3.9-2.8-6.3-2.8C4.4 1.3 0 5.7 0 11.2c0 2.6 1.2 5.1 3.3 7.3L15 30.2c.3.3.6.4 1 .4.3 0 .7-.1 1-.4l11.6-11.6c1.5-1.8 3.3-4.3 3.3-7.5.1-5.4-4.3-9.8-9.6-9.8z"
      clipRule="evenodd"
    />
  </svg>
);
