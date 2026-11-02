import React from "react";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";
import { X } from "lucide-react";
import { useNavigate } from "react-router";

const CartDrawer = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-screen w-full max-w-155 flex-col gap-6 overflow-y-auto border-l border-white/10 bg-[#181818] p-6 text-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Your Cart <span className="text-[#C6FF00]">🛒</span>
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-2 transition hover:bg-white/10"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Content */}
        <CartItems />
        <CartSummary />

        {/* View Full Cart */}
        <button
          onClick={() => {
            setIsOpen(false);
            navigate("/cart");
          }}
          className="w-full rounded-xl bg-[#C6FF00] py-3 font-bold text-black transition hover:bg-white"
        >
          View Full Cart
        </button>
      </div>
    </>
  );
};

export default CartDrawer;