"use client";

import { foodDeals } from "@/constants";
import React, { useState, useEffect } from "react";
import FoodCard from "../shared/FoodCard";
import { MoonLoader } from "react-spinners";
import { FoodItem } from "../shared/interface";
import { useCart } from "../cart_component/CartContext";
import { useFavoriteFoods } from "../favorite_component/FavoriteFoodContext";
import { useAuth } from "@clerk/nextjs";

const TopDeals = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const { isSignedIn } = useAuth();
  const { fetchFavoriteFoods, clearFavoriteFoods } = useFavoriteFoods();

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;
  let retryCount = 0;
  const maxRetries = 5;

  const fetchData = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/food`);
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

  useEffect(() => {
    if (isSignedIn) {
      fetchFavoriteFoods();
    } else {
      clearFavoriteFoods();
    }
    fetchData();
  }, [isSignedIn]); // Only run when isSignedIn changes

  return (
    <section>
      <h1 className="mt-3 my-2 text-2xl md:text-3xl xl:text-4xl  md:my-3 xl:my-5">
        Top Deals
      </h1>

      {loading ? (
        <div className="flex items-center justify-center h-full">
          <MoonLoader size={50} color={"#fd1e52"} loading={loading} />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 font-normal">
          {foodItems.map((foodItem) => (
            <FoodCard
              key={foodItem.name}
              isFavorite={false}
              addToCart={() =>
                addToCart({
                  productId: foodItem._id,
                  quantity: 1,
                  addOns: "",
                })
              }
              {...foodItem}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default TopDeals;
