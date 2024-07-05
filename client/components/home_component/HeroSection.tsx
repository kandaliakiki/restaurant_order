import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className=" w-full h-auto rounded-2xl bg-vibrant-pink text-white p-3 py-1  ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl leading-tight ">
            Discover a<br></br> World of Cuisines
          </h1>
          <h2 className="text-[0.8rem] font-normal mt-1  ">
            Experience The Ultimate Dining Adventure.
          </h2>

          <Button
            variant={"default"}
            className="text-[0.7rem] h-[1.25rem] rounded-xl mt-3 bg-white text-vibrant-pink"
          >
            Discover More
          </Button>
        </div>
        <Image
          alt="hero-image"
          src="/assets/burger-hero.png"
          height={150}
          width={150}
        ></Image>
      </div>
    </section>
  );
};

export default HeroSection;
