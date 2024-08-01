"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface CartItem {
  productId: string;
  quantity: number;
  addOns: string; // Comma-separated add-ons
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.productId === item.productId
      );

      if (existingItemIndex !== -1) {
        const updatedCart = prevCart.map((cartItem, index) => {
          if (index === existingItemIndex) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + item.quantity,
              addOns: [
                ...cartItem.addOns.split(","),
                ...item.addOns.split(","),
              ].join(","),
            };
          }
          return cartItem;
        });
        return updatedCart;
      } else {
        const newCart = [...prevCart, item];
        return newCart;
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productId !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
