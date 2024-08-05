"use client";

import { bottomBarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import IconBottomBar from "../home_component/IconBottomBar"; // Adjust the import path as necessary
import { useCart } from "../cart_component/CartContext";

const Bottombar = () => {
  const pathname = usePathname();
  const { cart } = useCart();
  return (
    <div className="fixed bottom-0 w-full bg-white-background text-white flex items-start justify-around py-4 h-16 ">
      {bottomBarLinks.map((link) =>
        link.label === "Search" ? (
          <Link
            href={link.route}
            className="custom-search-link"
            key={link.label}
          >
            <div className="bg-vibrant-pink rounded-full p-2 absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                width={36}
                height={36}
                alt={link.label}
                src={pathname === link.route ? link.imgUrlActive : link.imgUrl}
              ></Image>
            </div>
          </Link>
        ) : (
          <IconBottomBar
            key={link.label}
            link={link}
            pathname={pathname}
            badgeCount={link.label === "Cart" ? cart.length : undefined}
          />
        )
      )}
    </div>
  );
};

export default Bottombar;
