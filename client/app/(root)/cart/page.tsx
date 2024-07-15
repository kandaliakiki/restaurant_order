"use client";

import { Button } from "@/components/ui/button";
import { foodDeals } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [currentPage, setCurrentPage] = useState("confirmProduct");

  return (
    <section className="flex flex-col gap-3 mt-2  ">
      {(currentPage === "confirmProduct" ||
        currentPage === "confirmPurchase") && (
        <>
          <h1 className="text-2xl font-medium">Order Cart</h1>
          <div className="flex w-full justify-between items-center mb-2">
            <div
              className={`order_cart_confirm ${
                currentPage === "confirmProduct"
                  ? "border-b-[2px] border-vibrant-pink text-vibrant-pink"
                  : ""
              }`}
              onClick={() => setCurrentPage("confirmProduct")}
            >
              <Image
                alt="confirm_product_icon"
                src={`/assets/box${
                  currentPage === "confirmProduct" ? "-active" : ""
                }.svg`}
                width={20}
                height={20}
              />
              <p>Confirm Product</p>
            </div>
            <div
              className={`order_cart_confirm ${
                currentPage === "confirmPurchase"
                  ? "border-b-[2px] border-vibrant-pink text-vibrant-pink"
                  : ""
              }`}
              onClick={() => setCurrentPage("confirmPurchase")}
            >
              <Image
                alt="confirm_purchase_icon"
                src={`/assets/wallet${
                  currentPage === "confirmPurchase" ? "-active" : ""
                }.svg`}
                width={20}
                height={20}
              />
              <p>Confirm Purchase</p>
            </div>
          </div>
        </>
      )}

      {currentPage === "confirmProduct" && (
        <>
          {foodDeals.slice(0, 3).map((item) => (
            <div
              className="flex w-full bg-white rounded-lg shadow-lg pr-3 mb-1 "
              key={item.foodName}
            >
              <div className="flex justify-center items-center px-2 ">
                <Image
                  src={item.imageUrl}
                  alt="product"
                  width={90}
                  height={90}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <p>{item.foodName}</p>
                <p className="font-normal text-[0.7rem] leading-3">
                  Extra Cheese, Mayo Sauce
                </p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-vibrant-pink">$ {item.price}</p>
                  <div className="add_minus-div">
                    <span className="add_minus-btn">-</span>
                    <span className="flex-1 text-center h-5 flex items-center justify-center">
                      2
                    </span>
                    <span className="add_minus-btn">+</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
          <div className="flex w-full justify-between gap-3 ">
            <Button className="w-24 bg-white-background border-gray-500 text-gray-500 border-1 border ">
              Cancel
            </Button>
            <Button className="w-full bg-vibrant-pink text-white ">
              Confirm Product
            </Button>
          </div>
        </>
      )}
      {currentPage === "confirmPurchase" && (
        <>
          <div className="flex gap-1">
            <div className="relative min-w-52 p-5 border-2 border-vibrant-pink rounded-lg bg-white overflow-hidden">
              <div className="absolute top-1 right-1 w-12 h-12 bg-vibrant-pink text-white rounded-full flex items-center justify-center text-sm transform translate-x-1/2 -translate-y-1/2 overflow-hidden">
                <div className=" w-10 h-10 bg-vibrant-pink rounded-full flex items-end justify-start pl-[0.4rem] pb-1">
                  ✔
                </div>
              </div>
              <Image
                src="/assets/mastercard.svg"
                alt="Mastercard Logo"
                width={50}
                height={50}
              />
              <p className="text-center mt-3">****************</p>
            </div>
            <div className="relative w-full border-dashed  border-2 border-gray-400 rounded-lg bg-white  flex flex-col items-center justify-center ">
              <p className="text-center  text-sm text-gray-400">
                Add another payment method
              </p>
              <p className="text-center text-gray-400 text-2xl leading-none">
                +
              </p>
            </div>
          </div>

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
          <div className="flex w-full justify-between gap-3 ">
            <Button className="w-24 bg-white-background border-gray-500 text-gray-500 border-1 border ">
              Cancel
            </Button>
            <Button className="w-full bg-vibrant-pink text-white ">
              Confirm Purchase
            </Button>
          </div>
        </>
      )}
      {currentPage === "Purchased" && (
        <>
          <div className="flex gap-3 flex-col justify-center items-center mt-3 ">
            <Image
              alt="bag-check"
              src="/assets/bag-check.svg"
              width={130}
              height={130}
            ></Image>
            <p className="text-2xl text-vibrant-pink font-bold ">
              Thanks For Ordering
            </p>
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
        </>
      )}
    </section>
  );
};

export default page;
