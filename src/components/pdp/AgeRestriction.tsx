import Image from "next/image";
import React from "react";

interface ageRestrictionProps {
  className?: string;
}

export default function AgeRestriction({ className }: ageRestrictionProps) {
  return (
    <div className={`bg-white mx-auto mb-5 gap-2 p-4 ${className}`}>
      <Image
        src="/ageRecomended.svg"
        width={60}
        height={60}
        alt="age restriction"
      />
      <section className="text-xs w-3/5">
        <p className="pt-2 pb-1 ">
          Fantasy Violence. Use of Alcohol, Use of Tobacco, Simulated Gambling,
          Mild Language, Mild Blood
        </p>
        <hr className="border-black" />
        <p>User Interact</p>
      </section>
    </div>
  );
}
