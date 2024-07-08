"use client";
import SearchSection from "@/components/search_components/SearchSection";
import FoodCard from "@/components/shared/FoodCard";
import { Button } from "@/components/ui/button";
import { foodDeals } from "@/constants";
import React, { useState } from "react";

const page = () => {
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  return (
    <section className="flex flex-col gap-2 mt-2">
      <h1 className="text-2xl font-medium ">Search</h1>
      <SearchSection
        isFilterClicked={isFilterClicked}
        setIsFilterClicked={setIsFilterClicked}
      />
      <h2 className="text-xl font-medium mt-2 ">Filters</h2>
      <div className="flex gap-3 w-full ">
        <div className="bg-white w-20 shadow-lg text-center rounded-md px-3 py-1  text-[0.7rem] font-medium text-vibrant-pink ">
          Food Type
        </div>
        <div className="bg-white w-20  shadow-lg text-center rounded-md px-3 py-1  text-[0.7rem] font-medium text-vibrant-pink ">
          Price
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-1">
        <Button className="bg-vibrant-pink text-white h-[2rem] text-sm font-normal">
          Apply
        </Button>
      </div>

      <h3 className="text-lg font-medium mt-2">
        Suggestions from previous search
      </h3>
      <div className="grid grid-cols-2 gap-4 font-normal">
        {foodDeals.map((foodDeal) => (
          <FoodCard key={foodDeal.foodName} {...foodDeal}></FoodCard>
        ))}
      </div>
    </section>
  );
};

export default page;
