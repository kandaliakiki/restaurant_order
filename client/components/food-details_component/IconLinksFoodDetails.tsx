"use client";

import Image from "next/image";
import React from "react";
import { useCart } from "../cart_component/CartContext";
import { useTransitionRouter } from "next-view-transitions";
import TransitionLink, { TransitionFunction } from "../shared/TransitionLink";
import getPreviousPath from "../shared/usePreviousPath";

interface IconLinkProps {
  href: string;
  src: string;
  alt: string;
  badgeCount?: number;
  onClick?: () => void;
  onTransitionReady?: TransitionFunction; // Added type for onTransitionReady
}

const IconLink = ({
  href,
  src,
  alt,
  badgeCount,
  onClick,
  onTransitionReady = "slideDownToBottom", // Added default value
}: IconLinkProps) => (
  <TransitionLink
    href={href}
    onTransitionReady={onTransitionReady} // Updated to use onTransitionReady from props
    className="relative inline-block"
  >
    <Image
      alt={alt}
      src={src}
      className="bg-white rounded-full w-8 h-8 md:w-10 md:h-10 p-1"
      width={10}
      height={10}
    />
    <span
      className={`absolute -top-2 md:-top-3 -right-1 md:-right-2   inline-flex items-center justify-center aspect-square  w-[1.15rem] md:w-6 text-xs md:text-base font-bold leading-none text-vibrant-pink bg-white rounded-full transition-all duration-300 ease-in-out ${
        badgeCount && badgeCount > 0 ? "scale-100" : "scale-0"
      }`}
    >
      {badgeCount}
    </span>
  </TransitionLink>
);

const IconLinksFoodDetails = () => {
  const { cart } = useCart();
  const router = useTransitionRouter();

  return (
    <div className="w-full md:w-3/4 md:mx-auto px-4 pt-5 flex justify-between">
      <IconLink
        href={getPreviousPath()}
        src="/assets/left-chevron.svg"
        alt="left-chevron-icon"
      />
      <div className="flex flex-col  gap-2 h-full">
        <IconLink
          href="/cart"
          src="/assets/basket-active.svg"
          alt="basket-icon"
          badgeCount={cart.length}
          onTransitionReady="slideInOut"
        />
      </div>
    </div>
  );
};

export default IconLinksFoodDetails;
