import Image from "next/image";
import React from "react";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center   w-full">
      <div>
        <p className="text-[0.8rem]">My Location</p>
        <p className="text-[1rem] text-vibrant-pink">Jakarta, Indonesia</p>
      </div>
      <Image
        alt="profile picture"
        src="/assets/profile_pic.png"
        width={40}
        height={40}
        className="rounded-full"
      ></Image>
    </div>
  );
};

export default TopBar;
