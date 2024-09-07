import Image from "next/image";
import React from "react";

interface nitendoLogoProps {
  classNameLogoCss?: string;
  height?: number;
  width?: number;
}

export default function NitendoLogo({
  classNameLogoCss,
  height = 200,
  width = 200,
}: nitendoLogoProps) {
  return (
      <Image
        className={`object-none ${classNameLogoCss}`}
        width={height}
        height={width}
        src="/nitendo.svg"
        alt="Nitendo icon"
      />
  );
}
