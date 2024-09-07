import React from "react";
import { propsGameDescription } from "../pdp/GameDescription";

export default function Breadcrumb({ data }: propsGameDescription) {
  return (
    <nav className="flex gap-4 py-4">
      <span className="path">Store</span>

      <span className="path">Games</span>
      <strong className="path">{/* {data[0].title} */}</strong>
    </nav>
  );
}
