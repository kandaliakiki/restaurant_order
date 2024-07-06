import { Button } from "@/components/ui/button";
import { bottomBarLinks } from "@/constants";
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

const page = () => {
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
      <div className="fixed bottom-0 px-5 pt-28 w-full bg-white-background text-black flex flex-col items-start justify-start h-3/4 rounded-t-3xl">
        <Image
          className="absolute top-[-8rem] transform translate-x-[-50%] left-1/2"
          width={280}
          height={250}
          alt="food-detail-img"
          src="/assets/burger-food-deals.png"
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
          <p className="text-xl font-semibold">Double Decker Beef Burger</p>
          <p className="text-xl text-vibrant-pink font-bold">$ 7.49</p>
        </div>
        <p className="text-sm font-light">The Burger Planet</p>
        <div className="flex w-full gap-5 text-[0.7rem] font-normal mt-3">
          <div className="flex gap-1 justify-center items-center px-2 rounded-lg border border-black">
            <Image
              alt="rating-star"
              src="/assets/star.svg"
              width={12}
              height={12}
            />
            4.5 stars
          </div>
          <div className="flex gap-1 justify-center items-center px-2 rounded-lg border border-black">
            <Image
              alt="waiting-time"
              src="/assets/stopwatch.svg"
              width={12}
              height={12}
            />
            15-20 minutes
          </div>
        </div>
        <p className="font-normal text-sm mt-3">
          The Double Decker Beef Burger offers two beef patties, toasted buns,
          lettuce, tomatoes, and creamy sauce, making it a fulfilling choice for
          burger lovers.
        </p>
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
    </div>
  );
};

export default page;
