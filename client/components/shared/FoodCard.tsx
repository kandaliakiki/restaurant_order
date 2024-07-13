import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface FoodCardProps {
  name: string;
  subtitle: string;
  imageUrl: string;
  rating: number;
  timeToServe: string;
  description: string;
  price: number;
  isFavorite: boolean;
}

const FoodCard: React.FC<FoodCardProps> = ({
  imageUrl,
  name: foodName,
  price,
  isFavorite,
}) => {
  return (
    <div className="h-full w-full bg-white rounded-lg p-3 pb-10 text-sm tracking-wide font-medium">
      <p className="">{foodName}</p>
      <p className="text-vibrant-pink">$ {price}</p>
      <div className="h-4/6  rounded-lg mt-2 relative bg-white-background flex items-center justify-center">
        <Image
          alt="food-image"
          src={imageUrl}
          width={120}
          height={120}
          className="bg-transparent"
        ></Image>
      </div>
      <div className="flex gap-1 items-center mt-2 justify-between">
        <Button
          variant="default"
          className="text-[0.8rem] w-full h-[1.5rem] px-5 bg-vibrant-pink"
        >
          Add to Cart{" "}
        </Button>

        <Button
          variant="default"
          className="text-[0.8rem] h-[1.5rem] p-2 px-[0.3rem] bg-white-background flex items-center"
        >
          <Image
            alt="heart-icon"
            src={
              isFavorite
                ? "/assets/heart-active.svg"
                : "/assets/heart-pink-outline.svg"
            }
            width={18}
            height={18}
            className="bg-transparent "
          ></Image>
        </Button>
      </div>
    </div>
  );
};

export default FoodCard;
