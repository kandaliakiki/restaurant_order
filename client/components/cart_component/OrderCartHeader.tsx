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
    <h1 className="text-2xl font-medium">Order Cart</h1>
    <div className="flex w-full justify-between items-center mb-2">
      <div
        className={`order_cart_confirm ${
          currentPage === "confirmProduct"
            ? "border-b-[2px] border-vibrant-pink text-vibrant-pink"
            : ""
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
        <p>Confirm Product</p>
      </div>
      <div
        className={`order_cart_confirm ${
          currentPage === "confirmPurchase"
            ? "border-b-[2px] border-vibrant-pink text-vibrant-pink"
            : ""
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
        <p>Confirm Purchase</p>
      </div>
    </div>
  </>
);

export default OrderCartHeader;
