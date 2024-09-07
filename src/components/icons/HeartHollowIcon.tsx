import * as React from "react";
import { SVGProps } from "react";

export const HeartHollowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width ?? 50}
    fill="currentColor"
    stroke="currentColor"
    color="#e60012"
    data-testid="heartspark"
    viewBox="0 0 54 54"
    {...props}
  >
    <g className="hearts ">
      <path
        d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z"
        className="heart heart-outline "
      />
    </g>
  </svg>
);
