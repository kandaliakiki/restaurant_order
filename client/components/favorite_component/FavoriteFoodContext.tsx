"use client";

import { useAuth } from "@clerk/nextjs";
import React, { createContext, useContext, useEffect, useState } from "react";

const FavoriteFoodsContext = createContext<{
  favoriteFoods: string[];
  fetchFavoriteFoods: () => Promise<void>;
  clearFavoriteFoods: () => void;
}>({
  favoriteFoods: [],
  fetchFavoriteFoods: async () => {},
  clearFavoriteFoods: () => {},
});

export const FavoriteFoodsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favoriteFoods, setFavoriteFoods] = useState<string[]>([]);
  const { userId, isSignedIn } = useAuth(); // Replace with actual user ID logic

  const fetchFavoriteFoods = async () => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;
    const response = await fetch(`${backendUrl}/api/favorite-foods/${userId}`);

    const data = await response.json();
    setFavoriteFoods(data);
  };

  const clearFavoriteFoods = () => {
    setFavoriteFoods([]);
  };

  return (
    <FavoriteFoodsContext.Provider
      value={{ favoriteFoods, fetchFavoriteFoods, clearFavoriteFoods }}
    >
      {children}
    </FavoriteFoodsContext.Provider>
  );
};

// Custom hook to use the FavoriteFoodsContext
export const useFavoriteFoods = () => {
  return useContext(FavoriteFoodsContext);
};
