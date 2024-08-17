"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image"; // Ensure you import the Image component
import HeartAnimation from "../shared/HeartAnimation";
import { useAuth } from "@clerk/nextjs";
import { useFavoriteFoods } from "./FavoriteFoodContext";

interface FavoriteButtonProps {
  // Define props interface
  foodId: string; // Add foodId as a prop
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ foodId }) => {
  // Update component to accept props
  const { favoriteFoods, fetchFavoriteFoods } = useFavoriteFoods(); // Ensure favoriteFoods is an array
  const [isFavorite, setIsFavorite] = useState(false);
  const [animate, setAnimate] = useState(false); // New state for animation control
  const { userId } = useAuth(); // Replace with actual user ID

  const handleClick = async () => {
    // Change to async function
    setIsFavorite(!isFavorite);
    setAnimate(true); // Trigger animation on click

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;
    try {
      await fetch(`${backendUrl}/api/toggle-favorite-food`, {
        // Call the endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, foodId }), // Send userId and foodId
      });
    } catch (error) {
      console.error("Error toggling favorite food:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // Create an async function
      await fetchFavoriteFoods();
      setIsFavorite(favoriteFoods.includes(foodId));
    };
    fetchData(); // Call the async function
  }, []);

  return (
    <Button
      variant="default"
      className="text-[0.8rem] aspect-square h-[1.5rem]  md:h-[2.2rem] xl:h-[3rem] xl:w-[3rem] px-[0.3rem] bg-white-background flex items-center"
      onClick={handleClick}
    >
      {isFavorite && animate ? ( // Check for animation state
        <HeartAnimation />
      ) : isFavorite ? ( // Check if isFavorite is true
        <Image
          alt="heart-icon-filled"
          src="/assets/heart-active-2.svg" // New source for filled heart
          width={18}
          height={18}
          className="md:w-[100%] aspect-square"
        />
      ) : (
        <Image
          alt="heart-icon-outline"
          src="/assets/heart-pink-outline.svg"
          width={18}
          height={18}
          className="md:w-[100%] aspect-square "
        />
      )}
    </Button>
  );
};

export default FavoriteButton;
