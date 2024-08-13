"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Lottie, { useLottie } from "lottie-react";
import Image from "next/image"; // Ensure you import the Image component
import animationData from "../../public/animations/heart-animation.json";
import HeartAnimation from "./HeartAnimation";

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const animationData = isFavorite ? "/animations/heart-animation.json" : null;

  const options = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <Button
      variant="default"
      className="text-[0.8rem] h-[1.5rem] w-[2rem]  px-[0.3rem] bg-white-background flex items-center"
      onClick={() => setIsFavorite(!isFavorite)}
    >
      {isFavorite ? (
        <HeartAnimation />
      ) : (
        <Image
          alt="heart-icon"
          src="/assets/heart-pink-outline.svg"
          width={18}
          height={18}
        />
      )}
    </Button>
  );
};

export default FavoriteButton;
