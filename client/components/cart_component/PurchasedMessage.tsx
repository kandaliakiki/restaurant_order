import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import CartSummary from "./CartSummary";
import { useCartSummary } from "./CartSummaryContext";
import Link from "next/link";

const PurchasedMessage = () => {
  const { subtotal, adminFee, total } = useCartSummary();

  return (
    <div className="flex gap-3 flex-col justify-center items-center mt-3 ">
      <Image
        alt="bag-check"
        src="/assets/bag-check.svg"
        width={130}
        height={130}
      />
      <p className="text-2xl text-vibrant-pink font-bold ">
        Thanks For Ordering
      </p>

      <CartSummary subtotal={subtotal} adminFee={adminFee} total={total} />

      <Button className="w-full border-1 border border-vibrant-pink bg-white-background text-vibrant-pink text-lg font-normal">
        Check order details
      </Button>
      <Link href="/" className="w-full">
        <Button className="w-full border-1 border border-vibrant-pink bg-vibrant-pink text-white text-lg font-normal">
          Continue Finding Food
        </Button>
      </Link>
    </div>
  );
};

export default PurchasedMessage;
