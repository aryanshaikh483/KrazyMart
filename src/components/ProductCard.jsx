import { MyStore } from '@/context/MyContext'
import { Heart, ArrowUpRight, Star, ShoppingCart,   } from 'lucide-react';
import React, { useContext } from 'react'

const ProductCard = ({product}) => {

    // let {productsData} = useContext(MyStore)

  return (
    <div>
         <section className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
          {product.map((val) => (
            <article
              key={val.id}
              className="group mb-5 break-inside-avoid overflow-hidden rounded-[24px] border border-white/10 bg-[#191919]/90 transition duration-300 hover:-translate-y-1 hover:border-[#C6FF00]/35"
              style={{
                animation: `shopCardEnter 500ms ease-out ${val.id * 80}ms both`,
              }}
            >
              {/* Product Image */}
              <div className="relative flex items-center justify-center overflow-hidden bg-white p-8">
                <span className="absolute left-4 top-4 z-10 rounded-full bg-[#171717] px-3 py-1.5 text-[9px] font-medium uppercase tracking-wider text-[#C6FF00]">
                  {val.category}
                </span>

                <button
                  aria-label="Add to wishlist"
                  className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black/60 transition hover:bg-[#C6FF00] hover:text-black"
                >
                  <Heart size={16} />
                </button>

                <img
                  src={val.image}
                  alt={val.title}
                  loading="lazy"
                  className={`${val.height} w-full object-contain transition duration-500 group-hover:scale-105`}
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
                    <span>{val.rating.rate}</span>
                  </div>

                  <span className="text-[10px] tracking-wider text-white/25">
                    ITEM #{String(val.id).padStart(3, "0")}
                  </span>
                </div>

                <h2 className="min-h-12 text-base font-medium leading-6 text-white/90 transition group-hover:text-[#C6FF00]">
                  {val.title}
                </h2>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
                  <div>
                    <p className="text-xl font-semibold tracking-tight">
                      ${val.price.toFixed(2)}
                    </p>

                    <p className="mt-1 text-[10px] text-white/30">
                      Inclusive of product details
                    </p>
                  </div>

                  <button className="flex h-11 items-center gap-2 rounded-xl bg-[#C6FF00] px-4 text-sm font-semibold text-black transition hover:bg-[#d9ff57]">
                    <ShoppingCart size={16} />
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

    </div>
  )
}

export default ProductCard