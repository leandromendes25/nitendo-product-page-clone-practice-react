import Image from "next/image";
import React from "react";

export default function CountryIcon() {
  return (
    <Image
      src="https://assets.nintendo.com/image/upload/c_scale,w_24,q_auto/ncom/global/flags-change-region/FlagUsaIconRegionSelect.png"
      className="object-scale-down"
      width={30}
      height={10}
      alt="Estate"
    />
  );
}
