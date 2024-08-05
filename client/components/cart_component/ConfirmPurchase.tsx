import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import CartSummary from "./CartSummary";
import { useCartSummary } from "./CartSummaryContext";
import { PageState } from "@/app/(root)/cart/page";

interface ConfirmPurchaseProps {
  setCurrentPage: (page: PageState) => void;
}

const ConfirmPurchase: React.FC<ConfirmPurchaseProps> = ({
  setCurrentPage,
}) => {
  const { subtotal, adminFee, total } = useCartSummary();

  return (
    <>
      <div className="flex gap-1">
        <div className="relative min-w-52 p-5 border-2 border-vibrant-pink rounded-lg bg-white overflow-hidden">
          <div className="absolute top-1 right-1 w-12 h-12 bg-vibrant-pink text-white rounded-full flex items-center justify-center text-sm transform translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <div className=" w-10 h-10 bg-vibrant-pink rounded-full flex items-end justify-start pl-[0.4rem] pb-1">
              ✔
            </div>
          </div>
          <Image
            src="/assets/mastercard.svg"
            alt="Mastercard Logo"
            width={50}
            height={50}
          />
          <p className="text-center mt-3">****************</p>
        </div>
        <div className="relative w-full border-dashed  border-2 border-gray-400 rounded-lg bg-white  flex flex-col items-center justify-center ">
          <p className="text-center  text-sm text-gray-400">
            Add another payment method
          </p>
          <p className="text-center text-gray-400 text-2xl leading-none">+</p>
        </div>
      </div>

      <CartSummary subtotal={subtotal} adminFee={adminFee} total={total} />

      <div className="flex w-full justify-between gap-3 ">
        <Button
          className="w-24 bg-white-background border-gray-500 text-gray-500 border-1 border "
          onClick={() => setCurrentPage("confirmProduct" as PageState)}
        >
          Cancel
        </Button>
        <Button
          className="w-full bg-vibrant-pink text-white "
          onClick={() => setCurrentPage("Purchased" as PageState)}
        >
          Confirm Purchase
        </Button>
      </div>
    </>
  );
};

export default ConfirmPurchase;
