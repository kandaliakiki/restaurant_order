"use client";
import Image from "next/image";
import React from "react";

interface SearchSectionProps {
  isFilterClicked: boolean;
  setIsFilterClicked: (value: boolean) => void;
}

const SearchSection = ({
  isFilterClicked,
  setIsFilterClicked,
}: SearchSectionProps) => {
  return (
    <div className="flex gap-2">
      <form
        className="search_input flex flex-1 gap-3"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Search for food"
          className="focus:outline-none focus:ring-0 font-normal text-base"
        ></input>
      </form>
      <div
        onClick={() => setIsFilterClicked(!isFilterClicked)}
        className={`h-11 w-11 ${
          isFilterClicked ? "bg-vibrant-pink" : "bg-white"
        } shadow-lg rounded-xl cursor-pointer flex items-center justify-center`}
      >
        <Image
          alt="filter-icon"
          src={
            isFilterClicked ? "/assets/filter-active.svg" : "/assets/filter.svg"
          }
          width={30}
          height={30}
        ></Image>
      </div>
    </div>
  );
};

export default SearchSection;
