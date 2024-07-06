import FoodCard from "@/components/shared/FoodCard";
import { Button } from "@/components/ui/button";
import { foodCategories, foodDeals } from "@/constants";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col gap-2 mt-2">
      <p className="text-2xl font-medium">Categories</p>
      <div className="flex gap-2 overflow-x-auto hide-scrollbar">
        {foodCategories.map((category) => (
          <Button
            key={category.label}
            className={`${
              category.label === "Burger"
                ? "bg-vibrant-pink text-white"
                : "bg-white text-gray-disabled"
            } font-normal flex items-center rounded-md p-1 text-[0.8rem] px-6 h-[1.7rem]`}
          >
            {category.label}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 font-normal">
        {foodDeals.map((foodDeal) => (
          <FoodCard key={foodDeal.foodName} {...foodDeal}></FoodCard>
        ))}
      </div>
    </section>
  );
};

export default page;
