import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import TransitionLink from "./TransitionLink";
import FavoriteButton from "../favorite_component/FavoriteButton";
import { SignedIn } from "@clerk/nextjs";

interface FoodCardProps {
  name: string;
  subtitle: string;
  imageUrl: string;
  rating: number;
  timeToServe: string;
  description: string;
  price: number;
  _id: string;
  isFavorite: boolean;
  addToCart: () => void; // Add addToCart prop
}

const FoodCard: React.FC<FoodCardProps> = ({
  _id,
  imageUrl,
  name: foodName,
  price,
  isFavorite,
  addToCart, // Destructure addToCart
}) => {
  return (
    <div className="h-full w-full bg-white rounded-lg p-3 pb-5 text-sm md:text-base xl:text-xl tracking-wide font-medium">
      <TransitionLink
        href={`/food-details/${_id}`}
        onTransitionReady="slideUpCover"
      >
        <div>
          <p className="">{foodName}</p>
          <p className="text-vibrant-pink">$ {price}</p>
          <div className="h-4/6 rounded-lg mt-2 relative bg-white-background flex items-center justify-center">
            <Image
              alt="food-image"
              src={imageUrl}
              width={120}
              height={120}
              className="bg-transparent xl:w-[50%] xl:h-[50%]"
            ></Image>
          </div>
        </div>
      </TransitionLink>
      <div className="flex gap-1  md:gap-3 items-center mt-2 justify-between md:justify-center mx-auto">
        <Button
          variant="default"
          className="text-[0.8rem] w-full h-[1.5rem] px-5 bg-vibrant-pink md:text-base lg:text-lg xl:text-xl  md:h-[2.2rem] xl:h-[3rem]  md:w-3/4 "
          onClick={addToCart} // Use addToCart function
        >
          Add to Cart{" "}
        </Button>

        <SignedIn>
          <FavoriteButton foodId={_id}></FavoriteButton>
        </SignedIn>
      </div>
    </div>
  );
};

export default FoodCard;
