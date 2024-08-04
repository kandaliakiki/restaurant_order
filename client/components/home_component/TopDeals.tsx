"use client";

import { foodDeals } from "@/constants";
import React, { useEffect, useState } from "react";
import FoodCard from "../shared/FoodCard";
import { MoonLoader } from "react-spinners";
import { FoodItem } from "../shared/interface";
import { useCart } from "./CartContext";

const TopDeals = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // Destructure addToCart from useCart

  useEffect(() => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;
    let retryCount = 0;
    const maxRetries = 5;

    const fetchData = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/food`);
        const data = await response.json();
        if (data.length === 0 && retryCount < maxRetries) {
          retryCount++;
          fetchData(); // Retry immediately if conditions are met
        } else {
          setFoodItems(data);
          setLoading(false); // Set loading to false after data is fetched
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        if (retryCount < maxRetries) {
          retryCount++;
          fetchData(); // Retry on error
        } else {
          setLoading(false); // Stop loading after max retries
        }
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <h1 className="mt-3 my-2 text-2xl">Top Deals</h1>

      {loading ? (
        <div className="flex items-center justify-center h-full">
          <MoonLoader size={50} color={"#fd1e52"} loading={loading} />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 font-normal">
          {foodItems.map((foodItem) => (
            <FoodCard
              key={foodItem.name}
              isFavorite={false}
              addToCart={() =>
                addToCart({
                  productId: foodItem._id, // Use _id from FoodItem
                  quantity: 1, // Default quantity
                  addOns: "", // Default addOns
                })
              } // Pass addToCart function
              {...foodItem} // Pass the rest of foodItem properties
            ></FoodCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default TopDeals;
