import React from "react";
import Image from "next/image";
import { BottomBarLink } from "../../constants"; // Adjust the import path as necessary
import TransitionLink, { TransitionFunction } from "../shared/TransitionLink";

interface IconBottomBarProps {
  link: BottomBarLink;
  pathname: string;
  badgeCount?: number;
  getTransitionBasedOnPage: (
    href: string,
    pathname: string
  ) => TransitionFunction; // Ensure correct typing
}

const IconBottomBar = ({
  link,
  pathname,
  badgeCount,
  getTransitionBasedOnPage,
}: IconBottomBarProps) => {
  return (
    <TransitionLink
      onTransitionReady={getTransitionBasedOnPage(link.route, pathname)} // Use the prop here
      href={link.route}
      key={link.label}
      className="relative inline-block"
    >
      <Image
        width={32}
        height={32}
        alt={link.label}
        src={pathname === link.route ? link.imgUrlActive : link.imgUrl}
      ></Image>
      {badgeCount !== undefined && badgeCount > 0 && (
        <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-[11px] font-bold leading-none text-white bg-vibrant-pink rounded-full ">
          {badgeCount}
        </span>
      )}
    </TransitionLink>
  );
};

export default IconBottomBar;
