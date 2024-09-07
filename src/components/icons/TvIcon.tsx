import * as React from "react";

import { SVGProps } from "react";

export const TvIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    color="#FFF"
    data-testid="TvModeIcon"
    viewBox="0 0 32 32"
    {...props}
  >
    <g fill="currentColor">
      <path d="m11.903 16.114-1.154-3.56H9.591l1.641 4.627h1.357l1.632-4.627h-1.163zm-7.604-2.58h1.36v3.646h1.058v-3.646h1.371v-.981H4.299zm17.743 9.126v.758H32v-6.702h-9.958z" />
      <path d="M8.433 21.6H4.784v1.808h3.649v.01h1.656v-.01h3.645V21.6H10.09v-.737h8.443V8.582H0v12.281h8.433v.737zM2.11 18.956v-8.453h14.31v8.453H2.11z" />
      <path d="M16.333 21.6h-.603v1.801h5.589v-.602h-4.986z" />
    </g>
  </svg>
);
