import React from "react";
import { HeartHollowIcon } from "./icons/HeartHollowIcon";
import Button from "./common/Button";
import { DownloadIcon } from "./icons/DownloadIcon";
import Image from "next/image";

export default function FormDownload() {
  return (
    <form>
      <div>
        <span className="">
          <div className="mr-1 relative top-1 h-4 w-[2px] bg-nitendo-red inline-block" />
          Nitendo Switch
        </span>
        <h1 className="text-3xl font-bold my-4 lg:my-7 lg:text-2xl">
          Stardew Valley
        </h1>
        <div className="flex justify-between">
          <span className="font-bold text-3xl lg:text-2xl">$14.99</span>
          <button title="Clique here to add to your favorites">
            <HeartHollowIcon className="w-12" />
          </button>
        </div>
        <div className="flex gap-2">
          <Image
            src="/my-nintendo-gold-coin.png"
            width={24}
            height={24}
            alt="gold coin"
          />
          <span className="">
            Eligible for up <strong>75</strong> Gold Points
          </span>
        </div>
      </div>
      <Button title="Click here to download game">
        <DownloadIcon /> Direct Download
      </Button>
      <span className="mb-4 text-xs">
        this item will be sent to your system automatically after purchase
      </span>
    </form>
  );
}
