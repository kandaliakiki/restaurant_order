import React from "react";

interface CartSummaryProps {
  subtotal: number;
  adminFee: number;
  total: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  adminFee,
  total,
}) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-3 mb-1 text-sm md:text-lg flex flex-col gap-1 ">
      <div className="flex justify-between">
        <span className="text-gray-400">Sub Total</span>
        <div className="flex justify-between w-14 ">
          <span>$</span>
          <span>{subtotal.toFixed(2)}</span>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Admin</span>
        <div className="flex justify-between  w-14">
          <span>$</span>
          <span>{adminFee.toFixed(2)}</span>
        </div>
      </div>
      <hr className="my-2 border-gray-300 border-[1.5px] " />
      <div className="flex justify-between text-lg">
        <span className="text-vibrant-pink">Total</span>
        <div className="flex justify-between text-vibrant-pink w-14">
          <span>$</span>
          <span>{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
