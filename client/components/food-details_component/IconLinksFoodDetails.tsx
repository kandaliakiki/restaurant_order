"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCart } from "../home_component/CartContext";

interface IconLinkProps {
  href: string;
  src: string;
  alt: string;
  badgeCount?: number;
}

const IconLink = ({ href, src, alt, badgeCount }: IconLinkProps) => (
  <Link href={href} className="relative inline-block">
    <Image
      alt={alt}
      src={src}
      className="bg-white rounded-full w-8 h-8 p-1"
      width={10}
      height={10}
    />
    {badgeCount !== undefined && badgeCount > 0 && (
      <span className="absolute -top-2 -right-1 inline-flex items-center justify-center px-[6px] py-[3px] text-xs font-bold leading-none text-vibrant-pink bg-white rounded-full ">
        {badgeCount}
      </span>
    )}
  </Link>
);

const IconLinksFoodDetails = () => {
  const { cart } = useCart();

  const totalQuantity =
    cart.length > 0 ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0;

  return (
    <div className="w-full px-4 pt-5 flex justify-between">
      <IconLink
        href="/"
        src="/assets/left-chevron.svg"
        alt="left-chevron-icon"
      />
      <div className="flex flex-col  gap-2 h-full">
        <IconLink href="/" src="/assets/heart-active.svg" alt="favorite-icon" />
        <IconLink
          href="/"
          src="/assets/basket-active.svg"
          alt="basket-icon"
          badgeCount={cart.length}
        />
      </div>
    </div>
  );
};

export default IconLinksFoodDetails;
