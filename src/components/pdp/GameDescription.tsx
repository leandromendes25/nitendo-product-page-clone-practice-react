import Image from "next/image";
import React, { useState } from "react";
import Button from "../common/Button";
import Link from "next/link";
import GameContentParagraph from "./GameContentParagraph";
import { SearchData } from "../hooks/useSearchData";
import LessIcon from "../icons/LessIcon";
import PlusIcon from "../icons/PlusIcon";

export interface propsGameDescription {
  data: SearchData[];
  loading: boolean;
  error: string | null;
}

export default function GameDescription({
  data,
  loading,
  error,
}: propsGameDescription) {
  const [isOpen, setIsOpen] = useState(false);

  function expandReadMore() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <div className="px-4 pt-14 gap-4 md:flex md:mx- mx-[22%]">
      <div className="">
        {error ? (
          "Service unavailable"
        ) : loading ? (
          "Loading"
        ) : (
          <GameContentParagraph
            title={data[0].title}
            paragraphs={data[0].descriptions}
            isOpen={isOpen}
          />
        )}

        <div>
          <button
            className="flex gap-2 text-nitendo-red font-semibold py-4 text-"
            onClick={expandReadMore}
            title={`Read ${isOpen ? "less" : "more"}`}
          >
            {isOpen ? <LessIcon /> : <PlusIcon />} Read{" "}
            {isOpen ? "less" : "more"}
          </button>
          <p className="mb-4 text-xs">
            Software description provided by the publisher.
            <Button>
              <Link href="https://www.stardewvalley.net/">
                Explore this game's official website
              </Link>
            </Button>
          </p>
        </div>
      </div>
      <div className="relative h-auto w-full">
        <Image
          src={data[0]?.demonstrationImage[0]?.src}
          sizes="(max-width: 768px)"
          className="rounded-lg"
          fill
          alt={data[0]?.demonstrationImage[0]?.alt}
        />
      </div>
    </div>
  );
}
