import FoodData from "@/components/food-details_component/FoodData";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IconLinkProps {
  href: string;
  src: string;
  alt: string;
}

const IconLink = ({ href, src, alt }: IconLinkProps) => (
  <Link href={href}>
    <Image
      alt={alt}
      src={src}
      className="bg-white rounded-full w-8 h-8 p-1"
      width={10}
      height={10}
    />
  </Link>
);

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <div className="w-full px-4 pt-5 flex justify-between">
        <IconLink
          href="/"
          src="/assets/left-chevron.svg"
          alt="left-chevron-icon"
        />
        <IconLink href="/" src="/assets/heart-active.svg" alt="favorite-icon" />
      </div>
      <FoodData _id={params.id}></FoodData>
    </div>
  );
};

export default page;
