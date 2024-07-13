"use client";

import { foodDeals } from "@/constants";
import React, { useEffect, useState } from "react";
import FoodCard from "../shared/FoodCard";
import { MoonLoader } from "react-spinners"; // Import the MoonLoader
import { FoodItem } from "../shared/interface";

const TopDeals = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;
    let retryCount = 0;
    const maxRetries = 5;

    const fetchData = () => {
      fetch(`${backendUrl}/api/food`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length === 0 && retryCount < maxRetries) {
            retryCount++;
          } else {
            setFoodItems(data);
            setLoading(false); // Set loading to false after data is fetched
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false); // Stop loading on error
        });
    };

    fetchData();
  }, []);

  return (
    <section>
      <h1 className="mt-3 my-2 text-2xl">Top Deals</h1>

      {loading ? (
        <div className="flex items-center justify-center h-full">
          <MoonLoader size={50} color={"#123abc"} loading={loading} />{" "}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 font-normal">
          {foodItems.map((foodItem) => (
            <FoodCard
              key={foodItem.name}
              isFavorite={false}
              {...foodItem}
            ></FoodCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default TopDeals;
