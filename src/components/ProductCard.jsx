import { MyStore } from "@/context/MyContext";
import {
  Heart,
  ArrowUpRight,
  Star,
  ShoppingCart,
  Minus,
  Plus,
} from "lucide-react";
import React, { useContext } from "react";

const ProductCard = ({ product, itemInCart }) => {
  let { setIsInCart, increamentQuantity, decreamentQuantity } = useContext(MyStore);

  // let {productsData} = useContext(MyStore)

  const addToCart = (product) => {
    setIsInCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);

      if (existingProduct) {
        return prev;
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <div>
      <article
        key={product.id}
        className="group mb-5 break-inside-avoid overflow-hidden rounded-[24px] border border-white/10 bg-[#191919]/90 transition duration-300 hover:-translate-y-1 hover:border-[#C6FF00]/35"
        style={{
          animation: `shopCardEnter 500ms ease-out ${product.id * 80}ms both`,
        }}
      >
        {/* Product Image */}
        <div className="relative flex items-center justify-center overflow-hidden bg-white p-8">
          <span className="absolute left-4 top-4 z-10 rounded-full bg-[#171717] px-3 py-1.5 text-[9px] font-medium uppercase tracking-wider text-[#C6FF00]">
            {product.category}
          </span>

          <button
            aria-label="Add to wishlist"
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black/60 transition hover:bg-[#C6FF00] hover:text-black"
          >
            <Heart size={16} />
          </button>

          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className={`h-64 w-full object-contain transition duration-500 group-hover:scale-105`}
          />

          <div className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-[#C6FF00] text-black opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={18} />
          </div>
        </div>

        {/* Product Information */}
        <div className="p-5">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs text-amber-400">
              <Star size={13} fill="currentColor" />
              <span>{product.rating?.rate ?? "N/A"}</span>
            </div>

            <span className="text-[10px] tracking-wider text-white/25">
              ITEM #{String(product.id).padStart(3, "0")}
            </span>
          </div>

          <h2 className="min-h-12 text-base font-medium leading-6 text-white/90 transition group-hover:text-[#C6FF00]">
            {product.title}
          </h2>

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
            <div>
              <p className="text-xl font-semibold tracking-tight">
                ${product.price.toFixed(2)}
              </p>

              <p className="mt-1 text-[10px] text-white/30">
                Inclusive of product details
              </p>
            </div>
            {itemInCart ? (
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#111111] p-1">
                <button onClick={() => decreamentQuantity(product.id)} className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition hover:bg-[#C6FF00] hover:text-black">
                  <Minus size={14} />
                </button>
                
                <span className="min-w-5 text-center text-sm text-white">
                  {itemInCart.quantity}
                </span>

                <button onClick={() => increamentQuantity(product.id)} className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition hover:bg-[#C6FF00] hover:text-black">
                  <Plus size={14} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => addToCart(product)}
                className="flex h-11 items-center gap-2 rounded-xl bg-[#C6FF00] px-4 text-sm font-semibold text-black transition hover:bg-[#d9ff57]"
              >
                <ShoppingCart size={16} />
                Add
              </button>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
