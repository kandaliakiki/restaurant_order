import Image from "next/image";
import React from "react";

interface OrderCartHeaderProps {
  currentPage: "confirmProduct" | "confirmPurchase" | "Purchased";
  setCurrentPage: React.Dispatch<
    React.SetStateAction<"confirmProduct" | "confirmPurchase" | "Purchased">
  >;
}

const OrderCartHeader: React.FC<OrderCartHeaderProps> = ({
  currentPage,
  setCurrentPage,
}) => (
  <>
    <h1 className="section-title font-medium">Order Cart</h1>
    <div className=" flex w-full justify-between items-center mb-2 relative">
      <div
        className={`order_cart_confirm relative overflow-hidden   ${
          currentPage === "confirmProduct" ? "text-vibrant-pink" : ""
        }`}
        onClick={() => setCurrentPage("confirmProduct")}
      >
        <Image
          alt="confirm_product_icon"
          src={`/assets/box${
            currentPage === "confirmProduct" ? "-active" : ""
          }.svg`}
          width={20}
          height={20}
        />
        <p className=" md:text-lg xl:text-xl">Confirm Product</p>
      </div>
      <div
        className={`order_cart_confirm relative overflow-hidden flex  ${
          currentPage === "confirmPurchase" ? "text-vibrant-pink" : ""
        }`}
        onClick={() => setCurrentPage("confirmPurchase")}
      >
        <Image
          alt="confirm_purchase_icon"
          src={`/assets/wallet${
            currentPage === "confirmPurchase" ? "-active" : ""
          }.svg`}
          width={20}
          height={20}
        />
        <p className=" md:text-lg xl:text-xl">Confirm Purchase </p>
      </div>
      <div
        className={`absolute bottom-0 w-1/2 transition-transform duration-300 ${
          currentPage === "confirmProduct"
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="w-full bg-vibrant-pink h-[2px]"></div>
      </div>
    </div>
  </>
);

export default OrderCartHeader;
