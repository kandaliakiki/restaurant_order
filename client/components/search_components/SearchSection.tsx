"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface SearchSectionProps {
  isFilterClicked: boolean;
  setIsFilterClicked: (value: boolean) => void;
  setTextToSearch: (value: string) => void;
}

const SearchSection = ({
  isFilterClicked,
  setIsFilterClicked,
  setTextToSearch,
}: SearchSectionProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e: any) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setTextToSearch(searchText), 500);
    return () => clearTimeout(timeout);
  }, [searchText, setTextToSearch]);

  return (
    <div className="flex gap-2 lg:gap-4">
      <form
        className="search_input flex flex-1 gap-3 "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Search for food"
          className="focus:outline-none focus:ring-0 font-normal text-base lg:text-lg lg:h-8 "
          value={searchText}
          onChange={handleSearchChange}
        ></input>
      </form>
      <div
        onClick={() => setIsFilterClicked(!isFilterClicked)}
        className={`h-11 w-11 lg:h-14 lg:w-14 ${
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
          className="lg:w-8 lg:h-8"
        ></Image>
      </div>
    </div>
  );
};

export default SearchSection;
