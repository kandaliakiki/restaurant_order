"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface CartItem {
  productId: string;
  quantity: number;
  addOns: string; // Comma-separated add-ons
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string, addOns: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "cart";
const CART_EXPIRATION_KEY = "cart_expiration";
const EXPIRATION_TIME = 10 * 60 * 1000; // 10 minutes in milliseconds

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      const expiration = localStorage.getItem(CART_EXPIRATION_KEY);
      const now = new Date().getTime();

      if (savedCart && expiration && now < parseInt(expiration, 10)) {
        return JSON.parse(savedCart);
      } else {
        localStorage.removeItem(CART_STORAGE_KEY);
        localStorage.removeItem(CART_EXPIRATION_KEY);
      }
    }
    return [];
  });

  useEffect(() => {
    const now = new Date().getTime();
    const expiration = now + EXPIRATION_TIME;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    localStorage.setItem(CART_EXPIRATION_KEY, expiration.toString());
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) =>
          cartItem.productId === item.productId &&
          cartItem.addOns === item.addOns
      );

      if (existingItemIndex !== -1) {
        const updatedCart = prevCart.map((cartItem, index) => {
          if (index === existingItemIndex) {
            const existingAddOns = cartItem.addOns
              ? cartItem.addOns.split(",")
              : [];
            const newAddOns = item.addOns ? item.addOns.split(",") : [];

            // Check if add-ons are different
            const combinedAddOns =
              existingAddOns.join(",") !== newAddOns.join(",")
                ? [...newAddOns, ...existingAddOns].filter(Boolean).join(",")
                : cartItem.addOns;

            return {
              ...cartItem,
              quantity: cartItem.quantity + item.quantity, // Update quantity
              addOns: combinedAddOns, // Update addOns only if different
            };
          }
          return cartItem; // Return unchanged items
        });
        return updatedCart; // Return the updated cart
      } else {
        const newCart = [...prevCart, item];
        return newCart;
      }
    });
  };

  const removeFromCart = (productId: string, addOns: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.productId === productId && item.addOns === addOns)
      )
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
