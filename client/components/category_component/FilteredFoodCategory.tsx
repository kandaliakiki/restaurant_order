"use client";

import React, { useEffect, useState } from "react";
import { FoodItem } from "../shared/interface";
import FoodCard from "../shared/FoodCard";
import { MoonLoader } from "react-spinners";
import { useCart } from "../cart_component/CartContext";

const FilteredFoodCategory = ({ category }: { category: string }) => {
  const [filteredFood, setFilteredFood] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // Destructure addToCart from useCart

  useEffect(() => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;
    let retryCount = 0;
    const maxRetries = 5;

    const fetchFilteredFood = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/food/${category}`);
        const data = await response.json();
        if (data.length === 0 && retryCount < maxRetries) {
          retryCount++;
          fetchFilteredFood(); // Retry fetching data
        } else {
          setFilteredFood(data);
          setLoading(false); // Set loading to false after data is fetched
        }
      } catch (error) {
        console.error("Failed to fetch filtered food items", error);
        setLoading(false); // Stop loading on error
      }
    };

    fetchFilteredFood();
  }, [category]); // Add category to the dependency array to refetch when category changes

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <MoonLoader size={50} color={"#fd1e52"} loading={loading} />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 font-normal">
          {filteredFood.map((foodItem) => (
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
    </div>
  );
};

export default FilteredFoodCategory;
