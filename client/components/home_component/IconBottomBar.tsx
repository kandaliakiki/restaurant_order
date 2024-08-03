import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BottomBarLink } from "../../constants"; // Adjust the import path as necessary

interface IconBottomBarProps {
  link: BottomBarLink;
  pathname: string;
  badgeCount?: number;
}

const IconBottomBar = ({ link, pathname, badgeCount }: IconBottomBarProps) => {
  return (
    <Link href={link.route} key={link.label} className="relative inline-block">
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
    </Link>
  );
};

export default IconBottomBar;
