import React, { act, useState } from "react";
import MyNitendoStoreMenu from "./MyNitendoStore";
import GamesMenu from "./GamesMenu";
import MySwitchMenu from "./MySwitchMenu";
import NewsEventsMenu from "./NewsEventsMenu";

export default function Overlay() {
  const [actualModal, setActualModal] = useState<string>("");

  const modals = {
    Store: <MyNitendoStoreMenu />,
    Games: <GamesMenu />,
    Switch: <MySwitchMenu />,
    News: <NewsEventsMenu />,
  };
  //tipagem inline
  const handleToogleModal = ({ id }: { id: string }) => {
    setActualModal(id);
  };

  return (
    <section className="gap-4 justify-center relative font-bold hidden lg:flex ">
      <button
        className="text-nitendo-red "
        onClick={() => handleToogleModal({ id: "Store" })}
      >
        My Nitendo Store
      </button>
      <button
        className="hover:text-nitendo-red"
        onClick={() => handleToogleModal({ id: "Games" })}
      >
        Games
      </button>
      {!!actualModal.length && modals[actualModal]}
    </section>
  );
}
