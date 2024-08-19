import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import CartSummary from "./CartSummary";
import { useCartSummary } from "./CartSummaryContext";
import Link from "next/link";
import TransitionLink from "../shared/TransitionLink";

const PurchasedMessage = () => {
  const { subtotal, adminFee, total } = useCartSummary();

  return (
    <section className="md:w-3/4 md:mx-auto">
      <div className="flex gap-3 flex-col justify-center items-center mt-3 ">
        <Image
          alt="bag-check"
          src="/assets/bag-check.svg"
          width={130}
          height={130}
        />
        <p className="text-2xl text-vibrant-pink font-bold md:text-3xl lg:text-4xl">
          Thanks For Ordering
        </p>

        <CartSummary subtotal={subtotal} adminFee={adminFee} total={total} />

        <Button className="w-full border-1 border border-vibrant-pink bg-white-background text-vibrant-pink text-lg font-normal md:h-[3rem]  md:text-xl">
          Check order details
        </Button>
        <TransitionLink
          href="/"
          className="w-full"
          onTransitionReady="slideOutIn"
        >
          <Button className="w-full border-1 border border-vibrant-pink bg-vibrant-pink text-white text-lg font-normal md:h-[3rem] md:text-xl">
            Continue Finding Food
          </Button>
        </TransitionLink>
      </div>
    </section>
  );
};

export default PurchasedMessage;
