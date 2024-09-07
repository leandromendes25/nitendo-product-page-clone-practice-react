import React from "react";
import { SemiPortableIcon } from "./icons/SemiPortableIcon";
import { PortableIcon } from "./icons/PortableIcon";
import Model from "./common/Model";
import { TvIcon } from "./icons/TvIcon";

export default function SupportedModes() {
  return (
    <div className="rounded-lg bg-nitendo-gray w-full flex items-center flex-col pb-4">
      <p className="font-semibold text-center my-4 ">Supported play modes</p>
      <section className="flex gap-8 ">
        <Model Icon={<TvIcon />} Label="Tv" />
        <Model Icon={<SemiPortableIcon />} Label="Tabletop" />
        <Model Icon={<PortableIcon />} Label="Handheld" />
      </section>
    </div>
  );
}
