import Image from "next/image";
import Link from "next/link";
import { HeartHollowIcon } from "../icons/HeartHollowIcon";
import { propsGameDescription } from "../pdp/GameDescription";

export default function Slider({ data, loading, error }: propsGameDescription) {
  return (
    <section>
      <h2 className="text-2xl font-bold mt-8 mb-4">More like this</h2>
      <div className="rounded-lg max-w-64	border ">
        <Link className="block  group" href="/product/my-time-at-portia">
          <Image
            className="rounded-t-lg w-full group-hover:transition-transform duration-700 transform group-hover:-translate-y-5"
            width={146}
            height={150}
            src={data[0]?.otherGames.image.src}
            alt={data[0]?.otherGames.image.alt}
          />
          <article className="p-4">
            <p className="font-bold group-hover:text-nitendo-red">
              {data[0]?.otherGames?.name}
            </p>
            <time className="font-extralight text-[11px] block mb-8">
              4/16/19
            </time>
            <p>
              <strong>$29.99</strong>
            </p>
            <div className="flex justify-between relative">
              <p className="pb-4  relative top-1 whitespace-nowrap">
                <span className="h-4 w-[2px] mr-1 bg-nitendo-red inline-block" />
                Nitendo Switch
              </p>
              <HeartHollowIcon className="absolute right-0" />
            </div>
          </article>
        </Link>
      </div>
    </section>
  );
}
