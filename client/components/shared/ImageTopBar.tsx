import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

const ImageTopBar = () => {
  //   const user = await Promise.race([
  //     currentUser(),
  //     new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 2000))
  //   ]);
  //   const user = await currentUser();
  //   const userimage = user?.imageUrl || "/assets/profile.svg"; // Use default if user image doesn't exist
  return (
    <Image
      alt="profile picture"
      src="/assets/profile.svg"
      width={40}
      height={40}
      className="rounded-full -ml-2"
    ></Image>
  );
};

export default ImageTopBar;
