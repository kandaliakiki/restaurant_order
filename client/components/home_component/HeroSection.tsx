import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative  w-full h-auto rounded-2xl bg-vibrant-pink  text-white p-3 py-1  md:bg-hero-image md:bg-center  lg:py-10  ">
      <div className="absolute inset-0 z-0 bg-black opacity-60 rounded-2xl md:block hidden "></div>
      <div className=" relative flex justify-between md:justify-center   xl:gap-52  items-center z-10 ">
        <div className="text-left">
          <h1 className="   text-2xl md:text-6xl lg:text-8xl md:text-yellow-300  ">
            Discover a<br></br> World of Cuisines
          </h1>
          <h2 className="text-[0.8rem]  md:text-3xl lg:text-4xl xl:text-5xl font-normal mt-1 lg:mt-5 whitespace-nowrap  ">
            Experience The Ultimate Dining Adventure.
          </h2>

          <Button
            variant={"default"}
            className="text-[0.7rem]  md:text-xl lg:text-2xl h-[1.25rem] md:h-7 lg:h-8 lg:mt-4 rounded-xl mt-3 bg-white text-vibrant-pink"
          >
            Discover More
          </Button>
        </div>
        <Image
          alt="hero-image"
          src="/assets/burger-hero.png"
          height={150}
          width={150}
          className="w-24 h-24 md:w-60 md:h-60 lg:w-96 lg:h-96  "
        ></Image>
      </div>
    </section>
  );
};

export default HeroSection;
