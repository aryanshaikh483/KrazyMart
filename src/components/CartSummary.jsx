import { MyStore } from "@/context/MyContext";
import { useContext } from "react";

const CartSummary = () => {
  const { isInCart } = useContext(MyStore);

  const totalItems = isInCart.reduce(
    (total, val) => total + val.quantity,
    0
  );

  const totalPrice = isInCart.reduce(
    (total, val) => total + val.price * val.quantity,
    0
  );

  return (
    <div className="rounded-2xl border border-white/20 bg-white/2 p-5">
      <h2 className="mb-4 text-lg font-semibold text-white">
        Order Summary
      </h2>

      <div className="flex justify-between text-sm text-white/60">
        <span>Total Items</span>
        <span>{totalItems}</span>
      </div>

      <div className="mt-3 flex justify-between text-sm text-white/60">
        <span>Total Price</span>
        <span className="font-semibold text-[#C6FF00]">
          ${totalPrice.toFixed(2)}
        </span>
      </div>

      <button className="mt-6 w-full rounded-full bg-[#C6FF00] py-3 font-semibold text-black">
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;