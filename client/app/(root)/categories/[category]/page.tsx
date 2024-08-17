import FilteredFoodCategory from "@/components/category_component/FilteredFoodCategory";
import { Button } from "@/components/ui/button";
import { foodCategories, foodDeals } from "@/constants";
import Link from "next/link";
import React from "react";

const page = ({ params }: { params: { category: string } }) => {
  return (
    <section className="flex flex-col gap-2 mt-2">
      <p className="text-2xl font-medium md:text-3xl xl:text-4xl md:mb-3 ">
        Categories
      </p>
      <div className="flex gap-2 overflow-x-auto hide-scrollbar min-[400px]:justify-center min-[400px]:gap-3 min-[400px]:mb-3">
        {foodCategories.map((category) => (
          <Link key={category.label} href={`/categories/${category.route}`}>
            <Button
              className={`${
                category.route === params.category
                  ? "bg-vibrant-pink text-white"
                  : "bg-white text-gray-disabled"
              } font-normal flex items-center rounded-md p-1 text-[0.8rem] px-6 h-[1.7rem] md:text-base md:px-8 md:h-[2rem] lg:text-lg lg:px-10 lg:h-[2.2rem] xl:text-2xl xl:px-12 xl:h-[2.5rem]`}
            >
              {category.label}
            </Button>
          </Link>
        ))}
      </div>
      <FilteredFoodCategory category={params.category} />
    </section>
  );
};

export default page;
