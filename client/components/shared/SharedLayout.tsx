import { ReactNode } from "react";
import { CartProvider } from "../cart_component/CartContext";
import { CartSummaryProvider } from "../cart_component/CartSummaryContext";

const SharedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <CartProvider>
      <CartSummaryProvider>{children}</CartSummaryProvider>
    </CartProvider>
  );
};

export default SharedLayout;
