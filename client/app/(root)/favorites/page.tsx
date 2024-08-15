import FavoriteFoodList from "@/components/favorite_component/FavoriteFoodLists";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <section className="flex flex-col gap-2 mt-2">
      <p className="text-2xl font-medium">Favorites</p>
      <FavoriteFoodList />
    </section>
  );
};

export default page;
