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
  const { favoriteFoods, fetchFavoriteFoods } = useFavoriteFoods() || []; // Ensure favoriteFoods is an array
  const [isFavorite, setIsFavorite] = useState(
    favoriteFoods.includes(foodId) // No need for the ternary check now
  );
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
    fetchFavoriteFoods();
  }, []);

  return (
    <Button
      variant="default"
      className="text-[0.8rem] h-[1.5rem] w-[2rem]  px-[0.3rem] bg-white-background flex items-center"
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
        />
      ) : (
        <Image
          alt="heart-icon-outline"
          src="/assets/heart-pink-outline.svg"
          width={18}
          height={18}
        />
      )}
    </Button>
  );
};

export default FavoriteButton;
