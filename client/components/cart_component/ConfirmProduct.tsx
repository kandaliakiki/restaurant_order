"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import { useCartSummary } from "./CartSummaryContext";
import CartSummary from "./CartSummary";
import { PageState } from "@/app/(root)/cart/page";

interface ConfirmProductProps {
  setCurrentPage: (page: PageState) => void;
}

const ConfirmProduct: React.FC<ConfirmProductProps> = ({ setCurrentPage }) => {
  const { cart, removeFromCart } = useCart();
  const { subtotal, adminFee, total, setSubtotal } = useCartSummary();
  const [detailedCart, setDetailedCart] = useState<
    Array<{
      productId: string;
      quantity: number;
      addOns: string;
      foodName?: string;
      imageUrl?: string;
      price?: number;
    }>
  >([]);

  const fetchFoodDetail = async (productId: string) => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;
    let retryCount = 0;
    const maxRetries = 5;
    try {
      const response = await fetch(
        `${backendUrl}/api/food-detail/${productId}`
      );
      const data = await response.json();
      if (!data && retryCount < maxRetries) {
        retryCount++;
        return fetchFoodDetail(productId);
      } else {
        return data;
      }
    } catch (error) {
      console.error("Failed to fetch food item", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchCartDetails = async () => {
      const detailedItems = await Promise.all(
        cart.map(async (item) => {
          const details = await fetchFoodDetail(item.productId);
          return {
            ...item,
            foodName: details?.name,
            imageUrl: details?.imageUrl,
            price: details?.price,
          };
        })
      );
      setDetailedCart(detailedItems);
    };

    fetchCartDetails();
  }, [cart]);

  useEffect(() => {
    const newSubtotal = detailedCart.reduce(
      (acc, item) => acc + (item.price || 0) * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
  }, [detailedCart]);

  const handleQuantityChange = (
    productId: string,
    addOns: string,
    delta: number
  ) => {
    setDetailedCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.productId === productId && item.addOns === addOns) {
            const newQuantity = item.quantity + delta;
            if (newQuantity <= 0) {
              removeFromCart(productId, addOns);
              return null;
            }
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item !== null)
    );
  };

  return (
    <>
      {detailedCart.map((item) => (
        <div
          className="flex w-full bg-white rounded-lg shadow-lg pr-3 mb-1 "
          key={item.productId + item.addOns}
        >
          <div className="flex justify-center items-center px-2 ">
            <Image
              src={item.imageUrl || "/default-image.jpg"}
              alt="product"
              width={90}
              height={90}
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <p>{item.foodName}</p>
            <p className="font-normal text-[0.7rem] leading-3">{item.addOns}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-vibrant-pink">$ {item.price}</p>
              <div className="add_minus-div">
                <span
                  className="add_minus-btn"
                  onClick={() =>
                    handleQuantityChange(item.productId, item.addOns, -1)
                  }
                >
                  -
                </span>
                <span className="flex-1 text-center h-5 flex items-center justify-center">
                  {item.quantity}
                </span>
                <span
                  className="add_minus-btn"
                  onClick={() =>
                    handleQuantityChange(item.productId, item.addOns, 1)
                  }
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <CartSummary subtotal={subtotal} adminFee={adminFee} total={total} />
      <div className="flex w-full justify-between gap-3 ">
        <Button className="w-24 bg-white-background border-gray-500 text-gray-500 border-1 border ">
          Cancel
        </Button>
        <Button
          className="w-full bg-vibrant-pink text-white "
          onClick={() => setCurrentPage("confirmPurchase")}
        >
          Proceed to Purchase
        </Button>
      </div>
    </>
  );
};

export default ConfirmProduct;
