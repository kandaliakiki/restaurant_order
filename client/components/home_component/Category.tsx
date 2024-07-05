import { foodCategories } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <section>
      <h1 className="mt-3 my-2 text-2xl">Food Category</h1>

      <div className="flex  justify-between gap-2 ">
        {foodCategories.map((category) => (
          <div key={category.label} className="flex flex-col h-full">
            <Link
              href={category.route}
              key={category.label}
              className="bg-white  rounded-lg p-1 flex items-center "
            >
              <Image
                src={category.imgUrl}
                alt={category.label}
                width={category.size}
                height={category.size}
              />
            </Link>
            <span className="text-center mt-2 text-sm font-normal">
              {category.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
