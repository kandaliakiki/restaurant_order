import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const PurchasedMessage = () => (
  <div className="flex gap-3 flex-col justify-center items-center mt-3 ">
    <Image
      alt="bag-check"
      src="/assets/bag-check.svg"
      width={130}
      height={130}
    />
    <p className="text-2xl text-vibrant-pink font-bold ">Thanks For Ordering</p>
    <div className="w-full bg-white rounded-lg shadow-lg p-3 mb-1 text-sm flex flex-col gap-1 ">
      <div className="flex justify-between">
        <span className="text-gray-400">Sub Total</span>
        <div className="flex justify-between w-14 ">
          <span>$</span>
          <span>{(24.97).toFixed(2)}</span>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Admin</span>
        <div className="flex justify-between  w-14">
          <span>$</span>
          <span>{(5).toFixed(2)}</span>
        </div>
      </div>
      <hr className="my-2 border-gray-300 border-[1.5px] " />
      <div className="flex justify-between text-lg">
        <span className="text-vibrant-pink">Total</span>
        <div className="flex justify-between text-vibrant-pink w-14">
          <span>$</span>
          <span>{(29.97).toFixed(2)}</span>
        </div>
      </div>
    </div>

    <Button className="w-full border-1 border border-vibrant-pink bg-white-background text-vibrant-pink text-lg font-normal">
      Check order details
    </Button>
    <Button className="w-full border-1 border border-vibrant-pink bg-vibrant-pink text-white text-lg font-normal">
      Continue Finding Food
    </Button>
  </div>
);

export default PurchasedMessage;
