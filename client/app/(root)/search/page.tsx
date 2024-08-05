"use client";
import FilterSection from "@/components/search_components/FilterSection";
import SearchSection from "@/components/search_components/SearchSection";
import FoodCard from "@/components/shared/FoodCard";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader"; // Import MoonLoader
import { FoodItem } from "@/components/shared/interface";
import { useCart } from "@/components/cart_component/CartContext";

const page = () => {
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const [sliderValue, setSliderValue] = useState(10);
  const [checkedFoodTypes, setCheckedFoodTypes] = useState<string[]>([]);
  const [textToSearch, setTextToSearch] = useState("");

  const [filteredFood, setFilteredFood] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(false); // Add loading state

  const { addToCart } = useCart(); // Get addToCart from CartContext

  const fetchFilteredFood = async () => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;
    const queryParams = new URLSearchParams({
      maxPrice: sliderValue.toString(),
      foodTypes: checkedFoodTypes.join(","),
      searchText: textToSearch,
    });

    let retryCount = 0;
    const maxRetries = 5;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${backendUrl}/api/food-filter?${queryParams.toString()}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.length === 0 && retryCount < maxRetries) {
          retryCount++;
          fetchData();
        } else {
          setFilteredFood(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch filtered food:", error);
        if (retryCount < maxRetries) {
          retryCount++;
          fetchData();
        } else {
          setLoading(false);
        }
      }
    };

    fetchData();
  };

  const handleApplyFilters = () => {
    fetchFilteredFood();
  };

  useEffect(() => {
    fetchFilteredFood();
  }, [textToSearch]);

  return (
    <section className="flex flex-col gap-2 mt-2">
      <h1 className="text-2xl font-medium ">Search</h1>
      <SearchSection
        isFilterClicked={isFilterClicked}
        setIsFilterClicked={setIsFilterClicked}
        setTextToSearch={setTextToSearch}
      />
      <FilterSection
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
        checkedFoodTypes={checkedFoodTypes}
        setCheckedFoodTypes={setCheckedFoodTypes}
        onApplyFilters={handleApplyFilters}
      />
      <h3 className="text-lg font-medium mt-2">
        Suggestions from previous search
      </h3>
      {loading ? (
        <div className="flex justify-center items-center">
          <MoonLoader size={50} color={"#09f"} loading={loading} />{" "}
          {/* Display loading spinner */}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 font-normal">
          {filteredFood.length > 0 ? (
            filteredFood.map((foodItem) => (
              <FoodCard
                isFavorite={false}
                key={foodItem.name}
                addToCart={() =>
                  addToCart({
                    productId: foodItem._id, // Use _id from FoodItem
                    quantity: 1, // Default quantity
                    addOns: "", // Default addOns
                  })
                } // Pass addToCart function
                {...foodItem}
              ></FoodCard>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </section>
  );
};

export default page;
