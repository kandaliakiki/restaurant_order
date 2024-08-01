import { ReactNode } from "react";
import { CartProvider } from "../home_component/CartContext";

const SharedLayout = ({ children }: { children: ReactNode }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default SharedLayout;
