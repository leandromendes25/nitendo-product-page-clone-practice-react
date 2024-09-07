"use client";

import Link from "next/link";
import SearchBar from "../SearchBar";
import Logo from "./Logo";
import CountryIcon from "../icons/CountryIcon";
import { SupportIcon } from "../icons/Support";
import { BlackHeartIcon } from "../icons/BlackHeartIcon";
import { TruckIcon } from "../icons/TruckIcon";
import { NitendoStoreIcon } from "../icons/NitendoStoreIcon";
import { CartIcon } from "../icons/CartIcon";
import { UserIcon } from "../icons/UserIcon";
import { NitendoPointsCoin } from "../icons/NitendoPointsIcon";
import Overlay from "./Overlay";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="flex border-b justify-between bg-nitendo-red lg:bg-white">
          <div className="flex max-w-xl w-[70%]">
            <div className="bg-nitendo-red p-4">
              <Logo />
            </div>
            <SearchBar />
          </div>
          <div className="flex gap-6">
            <div className="items-center gap-4 hidden lg:flex">
              <Link
                className="flex gap-2  hover:text-nitendo-red"
                href=""
                target="__blank"
              >
                <SupportIcon />
                <strong>Support</strong>
              </Link>
              <Link className="flex gap-2 " href="" target="__blank">
                <BlackHeartIcon />
                <strong>Wish List</strong>
              </Link>
              <Link className="flex gap-2 " href="" target="__blank">
                <CartIcon />
                <strong>Cart</strong>
              </Link>
              <Link className="flex gap-2 " href="" target="__blank">
                <UserIcon />
                <strong>Log in / Sign up</strong>
              </Link>
            </div>
            <div className="flex gap-2 pr-6">
              <NitendoStoreIcon className="text-nitendo-gray lg:hidden" />
              <CountryIcon />
            </div>
          </div>
        </div>
        <Overlay />

        <div className="bg-nitendo-gray text-nitendo-light-dark py-3 text-center flex justify-center">
          <TruckIcon className="mr-4 text-nitendo-red" />
          <strong>Free shipping</strong>
          <span className="ml-1 mx-4">
            on orders $50 or more.{" "}
            <Link className="underline" href="" target="__blank">
              Restrictions apply.
            </Link>
          </span>

          <span className="hidden lg:flex">
            | <NitendoPointsCoin className="text-nitendo-red mx-4" /> Earn{" "}
            <strong className="underline mx-1">My Nitendo Points </strong> on
            digital games
          </span>
        </div>
      </nav>
    </header>
  );
}
