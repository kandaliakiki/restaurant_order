"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Lottie, { useLottie } from "lottie-react";
import Image from "next/image"; // Ensure you import the Image component
import animationData from "../../public/animations/heart-animation.json";
import HeartAnimation from "./HeartAnimation";

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(true);
  const [animate, setAnimate] = useState(false); // New state for animation control

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    setAnimate(true); // Trigger animation on click
  };

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
