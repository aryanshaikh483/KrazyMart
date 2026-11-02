
import { MyStore } from "@/context/MyContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useContext } from "react";

const CartCard = ({ val }) => {

    let { increamentQuantity, decreamentQuantity } = useContext(MyStore);
  

  return (
    <article className="flex flex-col gap-5 rounded-2xl border border-white/20 bg-white/2 p-5 backdrop-blur-sm sm:flex-row sm:items-center">

      {/* Product Image */}
      <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-xl bg-white p-4 sm:w-32">
        <img
          src={val.image}
          alt={val.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#C6FF00]">
            {val.category}
          </p>

          <h2 className="text-sm font-medium leading-6 text-white sm:text-base">
            {val.title}
          </h2>

          <p className="mt-2 text-lg font-semibold text-white">
            ${val.price.toFixed(2)}
          </p>
        </div>

        {/* Quantity & Remove */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#111111] p-1">

            <button  onClick={() => decreamentQuantity(val.id)} className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition hover:bg-[#C6FF00] hover:text-black">
              <Minus size={14} />
            </button>

            <span className="min-w-5 text-center text-sm text-white">
              {val.quantity}
            </span>

            <button  onClick={() => increamentQuantity(val.id)} className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition hover:bg-[#C6FF00] hover:text-black">
              <Plus size={14} />
            </button>

          </div>

          <button className="flex items-center gap-2 text-xs text-white/40 transition hover:text-red-400">
            <Trash2 size={15} />
            Remove
          </button>
        </div>
      </div>

      {/* Subtotal */}
      <div className="shrink-0 border-t border-white/10 pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
        <p className="text-xs text-white/35">Subtotal</p>
        <p className="mt-1 text-lg font-semibold text-[#C6FF00]">
          ${(val.price * val.quantity).toFixed(2)}
        </p>
      </div>

    </article>
  );
};

export default CartCard;
