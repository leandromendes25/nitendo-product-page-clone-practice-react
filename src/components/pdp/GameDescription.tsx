import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import Link from "next/link";
import GameContentParagraph from "./GameContentParagraph";
import { SearchData } from "../hooks/useSearchData";

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
  return (
    <div className="px-4 pt-14 gap-4 md:flex">
      <article className="">
        {error ? (
          "Service unavailable"
        ) : loading ? (
          "Loading"
        ) : (
          <GameContentParagraph
            title={data[0].title}
            paragraphs={data[0].descriptions}
          />
        )}

        <div className="">
          <p className="mb-4 text-xs">
            Software description provided by the publisher.
            <Button>
              <Link href="https://www.stardewvalley.net/">
                Explore this game's official website{" "}
              </Link>
            </Button>
          </p>
        </div>
      </article>
      <div className="">
        <Image
          src={data[0]?.demonstrationImage[0]?.src}
          sizes="(max-width: 768px)"
          width="500"
          height="500"
          alt={data[0]?.demonstrationImage[0]?.alt}
        />
      </div>
    </div>
  );
}
