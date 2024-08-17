import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import Link from "next/link";
import UserLocation from "./UserLocation";
import { currentUser } from "@clerk/nextjs/server";

const TopBar = async () => {
  let user;

  try {
    user = await currentUser();
  } catch (error) {
    console.error("Error fetching user:", error);
    user = null; // Handle the error by setting user to null
  }

  return (
    <div className="flex justify-between items-center w-full">
      <UserLocation></UserLocation>
      <SignedIn>
        <div className="flex items-center">
          <SignOutButton redirectUrl={"/"}>
            <div className=" cursor-pointer gap-4 p-4">
              <Image
                src="/assets/logout.svg"
                alt="logout"
                width={24}
                height={24}
              ></Image>
              <p className="text-light-2 max-lg:hidden">Logout</p>
            </div>
          </SignOutButton>
          <Image
            alt="profile picture"
            src={user ? user.imageUrl : "/assets/profile.svg"}
            width={40}
            height={40}
            className="rounded-full -ml-2"
          ></Image>
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <Button className="bg-vibrant-pink text-white text-base md:text-2xl md:p-6  ">
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
};

export default TopBar;
