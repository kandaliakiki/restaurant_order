"use client";

import { foodDeals } from "@/constants"; // Assuming you have constants for favorite food
import React, { useEffect, useState } from "react";
import FoodCard from "../shared/FoodCard";
import { MoonLoader } from "react-spinners";
import { FoodItem } from "../shared/interface";
import { useCart } from "../cart_component/CartContext";
import { useFavoriteFoods } from "./FavoriteFoodContext";

const FavoriteFoodList = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const { favoriteFoods } = useFavoriteFoods() || []; // Ensure favoriteFoods is an array

  useEffect(() => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;
    let retryCount = 0;
    const maxRetries = 5;

    const fetchData = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/food-by-ids`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ids: favoriteFoods }), // Use favoriteFoods for the request
        });
        const data = await response.json();
        if (data.length === 0 && retryCount < maxRetries) {
          retryCount++;
          fetchData();
        } else {
          setFoodItems(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        if (retryCount < maxRetries) {
          retryCount++;
          fetchData();
        } else {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [favoriteFoods]); // Add favoriteFoods as a dependency

  return (
    <section>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <MoonLoader size={50} color={"#fd1e52"} loading={loading} />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 font-normal">
          {foodItems.map((foodItem) => (
            <FoodCard
              key={foodItem.name}
              isFavorite={true}
              addToCart={() =>
                addToCart({
                  productId: foodItem._id,
                  quantity: 1,
                  addOns: "",
                })
              }
              {...foodItem}
            ></FoodCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default FavoriteFoodList;
