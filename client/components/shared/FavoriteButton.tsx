"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <Button
      variant="default"
      className="text-[0.8rem] h-[1.5rem] p-2 px-[0.3rem] bg-white-background flex items-center"
      onClick={() => setIsFavorite(!isFavorite)}
    >
      <Image
        alt="heart-icon"
        src="/assets/heart-pink-outline.svg"
        width={18}
        height={18}
        className={`bg-transparent transition-all duration-300 ${
          isFavorite ? "filter brightness-0" : "filter brightness-100"
        }`}
      />
    </Button>
  );
};

export default FavoriteButton;
