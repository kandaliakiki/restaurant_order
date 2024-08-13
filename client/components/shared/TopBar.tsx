import { currentUser, User } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

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
      <div>
        <p className="text-[0.8rem]">My Location</p>
        <p className="text-[1rem] text-vibrant-pink">Jakarta, Indonesia</p>
      </div>
      {user ? (
        <div className="flex items-center">
          <SignedIn>
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
          </SignedIn>
          <Image
            alt="profile picture"
            src={user.imageUrl}
            width={40}
            height={40}
            className="rounded-full -ml-2"
          ></Image>
        </div>
      ) : (
        <Link href="/sign-in" className="cursor-pointer">
          <Button className="bg-vibrant-pink text-white text-base">
            Sign In
          </Button>
        </Link>
      )}
    </div>
  );
};

export default TopBar;
