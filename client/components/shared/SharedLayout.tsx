import { ReactNode } from "react";
import { CartProvider } from "../cart_component/CartContext";
import { CartSummaryProvider } from "../cart_component/CartSummaryContext";
import { FavoriteFoodsProvider } from "../favorite_component/FavoriteFoodContext";
import { ClerkProvider } from "@clerk/nextjs";

const SharedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <CartProvider>
        <CartSummaryProvider>
          <FavoriteFoodsProvider>{children}</FavoriteFoodsProvider>
        </CartSummaryProvider>
      </CartProvider>
    </ClerkProvider>
  );
};

export default SharedLayout;
