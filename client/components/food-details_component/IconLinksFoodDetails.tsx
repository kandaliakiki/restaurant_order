"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCart } from "../cart_component/CartContext";
import { useRouter } from "next/navigation";

interface IconLinkProps {
  href: string;
  src: string;
  alt: string;
  badgeCount?: number;
  onClick?: () => void;
}

const IconLink = ({ href, src, alt, badgeCount, onClick }: IconLinkProps) => (
  <Link href={href} className="relative inline-block" onClick={onClick}>
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
  const router = useRouter();

  return (
    <div className="w-full px-4 pt-5 flex justify-between">
      <IconLink
        href="#"
        src="/assets/left-chevron.svg"
        alt="left-chevron-icon"
        onClick={() => router.back()}
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
