"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FoodItem } from "../shared/interface";
import { MoonLoader } from "react-spinners";
import { useCart } from "../cart_component/CartContext";

interface AddOnProps {
  src: string;
  alt: string;
  text: string;
  borderColor: string;
  textColor: string;
  onClick: () => void;
}

const AddOn = ({
  src,
  alt,
  text,
  borderColor,
  textColor,
  onClick,
}: AddOnProps) => (
  <div
    className={`flex gap-1 px-2 rounded-lg border ${borderColor} ${textColor} cursor-pointer`}
    onClick={onClick}
  >
    <Image alt={alt} src={src} width={16} height={16} />
    {text}
  </div>
);

const FoodData = ({ _id }: { _id: string }) => {
  const [foodDetail, setFoodDetail] = useState<FoodItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { cart, addToCart, removeFromCart } = useCart();
  const [chosenAddOns, setChosenAddOns] = useState<string[]>([]);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const toggleAddOn = (addOn: string) => {
    setChosenAddOns((prevAddOns) =>
      prevAddOns.includes(addOn)
        ? prevAddOns.filter((item) => item !== addOn)
        : [...prevAddOns, addOn]
    );
  };

  const handleAddToCart = () => {
    if (foodDetail) {
      const cartItem = {
        productId: _id,
        quantity: quantity,
        addOns: chosenAddOns.join(", "),
      };
      addToCart(cartItem);
    }
  };

  useEffect(() => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;
    let retryCount = 0;
    const maxRetries = 5;

    const fetchFoodDetail = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/food-detail/${_id}`);
        const data = await response.json();
        if (!data && retryCount < maxRetries) {
          retryCount++;
          fetchFoodDetail();
        } else {
          setFoodDetail(data);
          console.log(data);
        }
      } catch (error) {
        console.error("Failed to fetch food item", error);
        setLoading(false);
      }
    };

    fetchFoodDetail();
  }, [_id]);

  useEffect(() => {
    if (foodDetail && imageLoaded) {
      setLoading(false);
    }
  }, [foodDetail, imageLoaded]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      {loading ? (
        <div className=" absolute bottom-0 px-5 pt-28 w-full bg-white-background text-black flex flex-col items-center justify-start h-3/4 rounded-t-3xl">
          <MoonLoader size={50} color={"#fd1e52"} loading={loading} />

          {foodDetail && (
            <Image
              width={250}
              height={250}
              alt="food-detail-img"
              src={foodDetail.imageUrl}
              priority={true}
              onLoad={handleImageLoad}
              className="hidden"
            />
          )}
        </div>
      ) : (
        foodDetail && (
          <div className="absolute  bottom-0 px-5 pt-28 w-full bg-white text-black flex flex-col items-start justify-start  h-3/4  max-landscape-lg:h-1/2 landscape-lg:h-3/4 rounded-t-3xl">
            <div className="absolute top-[-8rem] md:top-[-12rem] left-1/2 transform -translate-x-1/2 flex justify-center items-start  w-[250px] h-[250px] md:w-[384px] md:h-[384px] p-1">
              <Image
                width={250}
                height={250}
                alt="food-detail-img"
                src={foodDetail.imageUrl}
                className="md:w-96 md:h-96"
              />
            </div>
            <section className="md:w-3/4 md:mx-auto">
              <div className="bg-vibrant-light-pink w-24  md:w-32 mt-2 md:mt-24 mx-auto h-6 md:h-9 flex self-center items-center justify-evenly rounded-lg text-white">
                <Button
                  onClick={handleDecrease}
                  className="bg-vibrant-pink text-center rounded-lg h-full z-10"
                >
                  -
                </Button>
                <span className="flex-1 text-center md:text-xl">
                  {quantity}
                </span>
                <Button
                  onClick={handleIncrease}
                  className="bg-vibrant-pink text-center rounded-lg h-full z-10"
                >
                  +
                </Button>
              </div>

              <div className="flex justify-between items-center w-full h-auto mt-3">
                <p className="text-xl md:text-3xl font-semibold ">
                  {foodDetail.name}
                </p>
                <p className="text-xl md:text-3xl text-vibrant-pink font-bold ">
                  $ {foodDetail.price}
                </p>
              </div>
              <p className="text-sm md:text-lg font-light">
                {foodDetail.subtitle}
              </p>
              <div className="flex w-full gap-5 text-[0.7rem] md:text-base font-normal mt-3">
                <div className="flex gap-1 justify-center items-center px-2 rounded-lg border border-black ">
                  <Image
                    alt="rating-star"
                    src="/assets/star.svg"
                    width={12}
                    height={12}
                    className="md:w-4 md:h-4"
                  />
                  {foodDetail.rating} stars
                </div>
                <div className="flex gap-1 justify-center items-center px-2 rounded-lg border border-black">
                  <Image
                    alt="waiting-time"
                    src="/assets/stopwatch.svg"
                    width={12}
                    height={12}
                    className="md:w-4 md:h-4"
                  />
                  {foodDetail.timeToServe}
                </div>
              </div>
              <p className="font-normal text-sm md:text-lg mt-3">
                {foodDetail.description}
              </p>
              <p className="font-medium text-lg md:text-2xl mt-3">Add-ons</p>
              <div className="flex w-full gap-3 text-[0.8rem] md:text-base font-normal mt-3 flex-wrap">
                {[
                  "Extra Cheese",
                  "Extra Bacon",
                  "Mayo Sauce",
                  "Tomato Sauce",
                ].map((addOn) => (
                  <AddOn
                    key={addOn}
                    src={
                      chosenAddOns.includes(addOn)
                        ? "/assets/cross.svg"
                        : "/assets/plus.svg"
                    }
                    alt="add-ons-icon"
                    text={addOn}
                    borderColor={
                      chosenAddOns.includes(addOn)
                        ? "border-vibrant-pink"
                        : "border-gray-500"
                    }
                    textColor={
                      chosenAddOns.includes(addOn)
                        ? "text-vibrant-pink"
                        : "text-gray-500"
                    }
                    onClick={() => toggleAddOn(addOn)}
                  />
                ))}
              </div>
              <Button
                className="w-full mt-4 h-12 md:h-14 text-lg md:text-2xl bg-vibrant-pink landscape:mb-10"
                onClick={handleAddToCart}
              >
                Add To Cart
              </Button>
            </section>
          </div>
        )
      )}
    </>
  );
};

export default FoodData;
