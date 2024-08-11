"use client";

import ConfirmProduct from "@/components/cart_component/ConfirmProduct";
import ConfirmPurchase from "@/components/cart_component/ConfirmPurchase";
import OrderCartHeader from "@/components/cart_component/OrderCartHeader";
import PurchasedMessage from "@/components/cart_component/PurchasedMessage";
import React, { useState } from "react";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ConfirmProduct setCurrentPage={setCurrentPage} />
        </motion.div>
      )}
      {currentPage === "confirmPurchase" && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ConfirmPurchase setCurrentPage={setCurrentPage} />
        </motion.div>
      )}
      {currentPage === "Purchased" && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <PurchasedMessage />
        </motion.div>
      )}
    </section>
  );
};

export default Page;
