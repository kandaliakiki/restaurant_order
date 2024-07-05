import { foodDeals } from "@/constants";
import React from "react";
import FoodCard from "../shared/FoodCard";

const TopDeals = () => {
  return (
    <section>
      <h1 className="mt-3 my-2 text-2xl">Top Deals</h1>

      <div className="grid grid-cols-2 gap-4 font-normal">
        {foodDeals.map((foodDeal) => (
          <FoodCard key={foodDeal.foodName} {...foodDeal}></FoodCard>
        ))}
      </div>
    </section>
  );
};

export default TopDeals;
