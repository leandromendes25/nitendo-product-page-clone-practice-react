import React from "react";
import { SearchIcon } from "./icons/SearchIcon";
import { ArrowDownIcon } from "./icons/ArrowDown";

export default function SearchBar() {
  return (
    <form className="ml-4 hidden justify-between gap-4 border-b flex-grow  pt-3 border-nitendo-light-dark mb-2 lg:flex lg:pt-2 hover:cursor-pointer hover:border-b-nitendo-red">
      <div className="flex gap-4 hover:text-nitendo-red">
        <SearchIcon />
        <input
          className="text-sm border-none hover:cursor-pointer"
          type="text"
          placeholder="Search"
        />
      </div>

      <div id="all-categories" className="flex items-center">
        <strong className="font-semibold flex gap-5 pr-3 hover:text-nitendo-red">
          All categories <ArrowDownIcon className="hover:text-nitendo-red" />
        </strong>
      </div>
    </form>
  );
}
