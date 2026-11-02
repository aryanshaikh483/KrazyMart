import { MyStore } from "@/context/MyContext";
import React, { useContext } from "react";
import CartCard from "@/components/CartCard";
import CartItems from "@/components/CartItems";
import CartSummary from "@/components/CartSummary";

const Cart = () => {
  const { isInCart } = useContext(MyStore);

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-5 mx-6 my-2">
      <div className="lg:col-span-3">
        <CartItems />
      </div>
      <div className="lg:col-span-2">
        <CartSummary />
      </div>
    </div>
  );
};

export default Cart;
