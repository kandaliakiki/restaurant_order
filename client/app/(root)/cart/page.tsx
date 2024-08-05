"use client";

import ConfirmProduct from "@/components/cart_component/ConfirmProduct";
import ConfirmPurchase from "@/components/cart_component/ConfirmPurchase";
import OrderCartHeader from "@/components/cart_component/OrderCartHeader";
import PurchasedMessage from "@/components/cart_component/PurchasedMessage";
import React, { useState } from "react";

export type PageState = "confirmProduct" | "confirmPurchase" | "Purchased";

const Page = () => {
  const [currentPage, setCurrentPage] = useState<PageState>("confirmProduct");

  return (
    <section className="flex flex-col gap-3 mt-2">
      {(currentPage === "confirmProduct" ||
        currentPage === "confirmPurchase") && (
        <OrderCartHeader
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}

      {currentPage === "confirmProduct" && (
        <ConfirmProduct setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "confirmPurchase" && (
        <ConfirmPurchase setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "Purchased" && <PurchasedMessage />}
    </section>
  );
};

export default Page;
