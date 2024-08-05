"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartSummaryContextProps {
  subtotal: number;
  adminFee: number;
  total: number;
  setSubtotal: (value: number) => void;
}

const CartSummaryContext = createContext<CartSummaryContextProps | undefined>(
  undefined
);

export const CartSummaryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [subtotal, setSubtotal] = useState(0);
  const adminFee = 5;
  const total = subtotal + adminFee;

  return (
    <CartSummaryContext.Provider
      value={{ subtotal, adminFee, total, setSubtotal }}
    >
      {children}
    </CartSummaryContext.Provider>
  );
};

export const useCartSummary = () => {
  const context = useContext(CartSummaryContext);
  if (!context) {
    throw new Error("useCartSummary must be used within a CartSummaryProvider");
  }
  return context;
};
