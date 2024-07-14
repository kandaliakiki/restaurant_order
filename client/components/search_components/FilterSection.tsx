"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface FilterSectionProps {
  sliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
  checkedFoodTypes: string[];
  setCheckedFoodTypes: React.Dispatch<React.SetStateAction<string[]>>;
  onApplyFilters: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  sliderValue,
  setSliderValue,
  checkedFoodTypes,
  setCheckedFoodTypes,
  onApplyFilters,
}) => {
  const sliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const updateSliderBackground = () => {
      const value =
        ((Number(slider.value) - Number(slider.min)) /
          (Number(slider.max) - Number(slider.min))) *
        100;
      slider.style.setProperty("--value", `${value}%`);
    };

    slider.addEventListener("input", updateSliderBackground);
    updateSliderBackground();

    return () => {
      slider.removeEventListener("input", updateSliderBackground);
    };
  }, []);

  const handleCheckboxChange = (foodType: string) => {
    setCheckedFoodTypes((prev) =>
      prev.includes(foodType)
        ? prev.filter((type) => type !== foodType)
        : [...prev, foodType]
    );
  };

  return (
    <>
      <h2 className="text-xl font-medium mt-2 ">Filters</h2>
      <div className="flex flex-col gap-3 w-full ">
        <div className="bg-white w-full shadow-lg  rounded-md px-3 py-1  text-base font-medium text-gray-500 ">
          <p>Max Price</p>
          <div className="flex justify-between items-center gap-2 text-sm ">
            <p className="text-center mt-2">0</p>{" "}
            <Input
              type="range"
              min="0"
              max="20"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full custom-slider mt-2"
              ref={sliderRef}
            />
            <p className="text-center flex mt-2">$&nbsp;{sliderValue}</p>{" "}
          </div>
        </div>
        <div className="bg-white w-full shadow-lg  rounded-md px-3 py-1  text-base font-medium text-gray-500 ">
          <p>Food Type</p>
          <div className="flex justify-between items-center gap-2 text-sm mt-1 text-gray-400 font-medium ">
            {["burger", "pizza", "chicken", "fries"].map((foodType) => (
              <label key={foodType} className="flex items-center gap-2 ">
                <input
                  type="checkbox"
                  value={foodType}
                  className="custom-checkbox"
                  checked={checkedFoodTypes.includes(foodType)}
                  onChange={() => handleCheckboxChange(foodType)}
                />
                {foodType.charAt(0).toUpperCase() + foodType.slice(1)}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-1">
        <Button
          className="bg-vibrant-pink text-white h-[2rem] text-sm font-normal"
          onClick={onApplyFilters}
        >
          Apply
        </Button>
      </div>
    </>
  );
};

export default FilterSection;
