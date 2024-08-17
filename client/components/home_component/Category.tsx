import { foodCategories } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TransitionLink from "../shared/TransitionLink";

const Category = () => {
  return (
    <section>
      <h1 className="mt-3 my-2 text-2xl md:text-3xl xl:text-4xl  md:my-3 xl:my-5">
        Food Category
      </h1>

      <div className="flex  justify-center   gap-2 xl:gap-5  xl:px-24">
        {foodCategories.map((category) => (
          <div key={category.label} className="flex flex-col h-full ">
            <TransitionLink
              href={`/categories/${category.route}`}
              key={category.label}
              className="bg-white flex items-center rounded-lg p-1 h-20  min-[380px]:h-32  md:h-40 lg:h-56 xl:h-72 aspect-square justify-center"
              onTransitionReady="slideInOut"
            >
              <Image
                src={category.imgUrl}
                alt={category.label}
                width={category.size}
                height={category.size}
                className="w-[100%] h-[100%]"
              />
            </TransitionLink>
            <span className="text-center mt-2 text-sm font-normal md:text-xl xl:text-2xl">
              {category.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
