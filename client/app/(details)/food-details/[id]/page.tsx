import FoodData from "@/components/food-details_component/FoodData";
import IconLinksFoodDetails from "@/components/food-details_component/IconLinksFoodDetails";
import { CartProvider } from "@/components/home_component/CartContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <CartProvider>
      <div>
        <IconLinksFoodDetails></IconLinksFoodDetails>

        <FoodData _id={params.id}></FoodData>
      </div>
    </CartProvider>
  );
};

export default page;
