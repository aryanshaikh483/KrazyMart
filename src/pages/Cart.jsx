
import { MyStore } from "@/context/MyContext";
import React, { useContext } from "react";
import CartCard from "@/components/CartCard";

const Cart = () => {
  const { isInCart } = useContext(MyStore);

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">

      {/* Cart Items */}
      <div className="flex flex-col gap-5 lg:col-span-3">
        {isInCart.map((val) => (
          <CartCard key={val.id} val={val} />
        ))}
      </div>

      {/* Order Summary */}
      <div className="rounded-2xl border border-white/20 bg-white/2 p-5 backdrop-blur-sm lg:col-span-2">
        <h2 className="mb-4 text-lg font-semibold text-white">
          Order Summary
        </h2>

        <div className="flex justify-between text-sm text-white/60">
          <span>Total Items</span>
          <span>{isInCart.length}</span>
        </div>

        <div className="mt-3 flex justify-between text-sm text-white/60">
          <span>Total Price</span>
          <span className="font-semibold text-[#C6FF00]">
            ${isInCart.reduce((total, val) => total + val.price * val.quantity, 0).toFixed(2)}
          </span>
        </div>

        <button className="mt-6 w-full rounded-full bg-[#C6FF00] py-3 font-semibold text-black transition hover:bg-[#b5e600]">
          Checkout
        </button>
      </div>

    </div>
  );
};

export default Cart;
