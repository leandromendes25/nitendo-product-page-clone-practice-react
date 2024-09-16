import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./common/Button";

export default function PlayOnlineAds() {
  return (
    <section className="">
      <div className="p-10 bg-nitendo-gray rounded-lg flex">
        <div className="">
          <Image
            src="/online.svg"
            className="mb-6"
            width={200}
            height={200}
            alt="Play Switch Online"
          />
          <p className="font-bold mb-2 ">
            Play online, access classic NES™ and Super NES™ games, and more
            with a Nintendo Switch Online membership.
          </p>
          <p className="font-bold text-nitendo-light-dark">
            This game supports:{" "}
            <Link className="text-nitendo-red underline" href="#">
              Online Play Save Data Cloud
            </Link>
          </p>
          <Button width="w-40" title="Click here to learn more">
            Learn more
          </Button>
        </div>
        <div className="relative w-full">
          <Image
            className="object-contain"
            src="/pro-controller.png"
            fill
            alt="Controle nitendo switch pro"
          />
        </div>
      </div>
    </section>
  );
}
