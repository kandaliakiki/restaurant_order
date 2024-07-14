"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FoodItem } from "../shared/interface";
import { MoonLoader } from "react-spinners";

interface AddOnProps {
  src: string;
  alt: string;
  text: string;
  borderColor: string;
  textColor: string;
}

const AddOn = ({ src, alt, text, borderColor, textColor }: AddOnProps) => (
  <div
    className={`flex gap-1 px-2 rounded-lg border ${borderColor} ${textColor}`}
  >
    <Image alt={alt} src={src} width={16} height={16} />
    {text}
  </div>
);

const FoodData = ({ _id }: { _id: string }) => {
  const [foodDetail, setFoodDetail] = useState<FoodItem | null>(null); // Use singular FoodItem
  const [loading, setLoading] = useState(true); // Add loading state

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
          fetchFoodDetail(); // Retry fetching data
        } else {
          setFoodDetail(data);
          console.log(data);
          setLoading(false); // Set loading to false after data is fetched
        }
      } catch (error) {
        console.error("Failed to fetch food item", error);
        setLoading(false); // Stop loading on error
      }
    };

    fetchFoodDetail();
  }, [_id]);
  return (
    <>
      {loading ? (
        <div className=" fixed bottom-0 px-5 pt-28 w-full bg-white-background text-black flex flex-col items-center justify-start h-3/4 rounded-t-3xl">
          <MoonLoader size={50} color={"#fd1e52"} loading={loading} />
        </div>
      ) : (
        foodDetail && (
          <div className="fixed bottom-0 px-5 pt-28 w-full bg-white-background text-black flex flex-col items-start justify-start h-3/4 rounded-t-3xl">
            <Image
              className="absolute top-[-8rem] transform translate-x-[-50%] left-1/2"
              width={250}
              height={250}
              alt="food-detail-img"
              src={foodDetail.imageUrl}
            />
            <div className="bg-vibrant-light-pink w-24 mt-2 flex self-center items-center justify-evenly rounded-lg text-white">
              <span className="bg-vibrant-pink flex-1 text-center rounded-lg">
                -
              </span>
              <span className="flex-1 text-center">2</span>
              <span className="bg-vibrant-pink flex-1 text-center rounded-lg">
                +
              </span>
            </div>
            <div className="flex justify-between items-center w-full h-auto mt-3">
              <p className="text-xl font-semibold">{foodDetail.name}</p>
              <p className="text-xl text-vibrant-pink font-bold">
                $ {foodDetail.price}
              </p>
            </div>
            <p className="text-sm font-light">{foodDetail.subtitle}</p>
            <div className="flex w-full gap-5 text-[0.7rem] font-normal mt-3">
              <div className="flex gap-1 justify-center items-center px-2 rounded-lg border border-black">
                <Image
                  alt="rating-star"
                  src="/assets/star.svg"
                  width={12}
                  height={12}
                />
                {foodDetail.rating} stars
              </div>
              <div className="flex gap-1 justify-center items-center px-2 rounded-lg border border-black">
                <Image
                  alt="waiting-time"
                  src="/assets/stopwatch.svg"
                  width={12}
                  height={12}
                />
                {foodDetail.timeToServe}
              </div>
            </div>
            <p className="font-normal text-sm mt-3">{foodDetail.description}</p>
            <p className="font-medium text-lg mt-3">Add-ons</p>
            <div className="flex w-full gap-3 text-[0.8rem] font-normal mt-3 flex-wrap">
              <AddOn
                src="/assets/cross.svg"
                alt="add-ons-icon"
                text="Extra Cheese"
                borderColor="border-vibrant-pink"
                textColor="text-vibrant-pink"
              />
              <AddOn
                src="/assets/cross.svg"
                alt="add-ons-icon"
                text="Extra Bacon"
                borderColor="border-vibrant-pink"
                textColor="text-vibrant-pink"
              />
              <AddOn
                src="/assets/plus.svg"
                alt="add-ons-icon"
                text="Mayo Sauce"
                borderColor="border-gray-500"
                textColor="text-gray-500"
              />
              <AddOn
                src="/assets/plus.svg"
                alt="add-ons-icon"
                text="Tomato Sauce"
                borderColor="border-gray-500"
                textColor="text-gray-500"
              />
            </div>
            <Button className="w-full mt-4 h-12 text-lg bg-vibrant-pink">
              Add To Cart
            </Button>
          </div>
        )
      )}
    </>
  );
};

export default FoodData;
