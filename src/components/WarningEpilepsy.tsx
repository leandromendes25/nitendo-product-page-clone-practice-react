import Link from "next/link";
import React from "react";

export default function WarningEpilepsy() {
  return (
    <section className="my-16 text-xs mx-2 ">
      <p className="my-2 ">
        WARNING: If you have epilepsy or have had seizures or other unusual
        reactions to flashing lights or patterns, consult a doctor before
        playing video games. All users should read the Health and Safety
        Information available in the system settings before using this software.
      </p>
      <p className="my-2 text-xs">
        Nintendo Switch Online membership (sold separately) and Nintendo Account
        required for online play. Not available in all countries. Internet
        access required for online features. Terms apply.{" "}
        <Link
          href="http://nintendo.com/switch-online"
          className="whitespace-nowrap"
        >
          nintendo.com/switch-online
        </Link>
      </p>
      <p className="mt-2 text-xs">
        Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.
      </p>
    </section>
  );
}
