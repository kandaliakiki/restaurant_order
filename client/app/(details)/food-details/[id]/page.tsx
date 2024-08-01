import FoodData from "@/components/food-details_component/FoodData";
import IconLinksFoodDetails from "@/components/food-details_component/IconLinksFoodDetails";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <IconLinksFoodDetails></IconLinksFoodDetails>

      <FoodData _id={params.id}></FoodData>
    </div>
  );
};

export default page;
