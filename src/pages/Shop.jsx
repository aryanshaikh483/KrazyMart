import ProductCard from "@/components/ProductCard";
import { MyStore } from "@/context/MyContext";
import axios from "axios";
import { Search } from "lucide-react";
import React, { useContext, useEffect } from "react";

const Shop = () => {
  const {
    productsData,
    setProductsData,
    productCategoryFilter,
    setProductCategoryFilter,
    selectedCategory,
    setSelectedCategory,
    isInCart,
  } = useContext(MyStore);

  const categories = [
    "Electronics",
    "Men's Clothing",
    "Women's Clothing",
    "jewelery",
  ];

  let getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("Api error", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);
  const filteredProducts = (item) => {
    const filtered = productsData.filter((product) => {
      return product.category === item.toLowerCase();
    });

    setProductCategoryFilter(filtered);
  };

  const displayProducts = productCategoryFilter
    ? productsData.filter(
        (product) => product.category === productCategoryFilter,
      )
    : productsData;
    
  return (
    <main className="min-h-screen px-4 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[90%]">
        {/* Page Header */}
        <section className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#C6FF00]">
            The collection
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                Find your <span className="text-[#C6FF00]">next.</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/45 sm:text-base">
                Everyday essentials, standout pieces, and technology worth
                bringing home.
              </p>
            </div>

            <p className="text-sm text-white/40">
              <span className="text-white"> {productsData.length} </span>
              products to explore
            </p>
          </div>
        </section>

        {/* Search Bar */}
        <section className="mb-8 flex flex-col gap-5">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1 sm:max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
              />

              <input
                type="text"
                placeholder="Search the collection..."
                className="w-full rounded-2xl border border-white/10 bg-[#181818]/80 py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-white/30 focus:border-[#C6FF00]/50"
              />
            </div>
            <button className="border-[#C6FF00] bg-[#C6FF00] text-black shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium  hover:border-[#C6FF00]/40 hover:text-white hover:bg-[#181818]">
              Search
            </button>
          </div>

          {/* Category Pills */}

          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => {
                setSelectedCategory("All Products");
                setProductCategoryFilter(null);
              }}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                selectedCategory === "All Products"
                  ? "border-[#C6FF00] bg-[#C6FF00] text-black"
                  : "border-white/10 bg-[#181818]/70 text-white/55 hover:border-[#C6FF00]/40 hover:text-white"
              }`}
            >
              All Products
            </button>

            {categories.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setSelectedCategory(item);
                  filteredProducts(item);
                }}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm transition ${
                  selectedCategory === item
                    ? "border-[#C6FF00] bg-[#C6FF00] font-medium text-black"
                    : "border-white/10 bg-[#181818]/70 text-white/55 hover:border-[#C6FF00]/40 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {/* Product Masonry Grid */}
        <div className="grid grid-cols-4 gap-10">
          {displayProducts.map((val) => {
            let itemInCart = isInCart.find((elem) => elem.id === val.id);

            return (
              <ProductCard key={val.id} product={val} itemInCart={itemInCart} />
            );
          })}
        </div>

        {/* Bottom Note */}
        <footer className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/30 sm:flex-row sm:items-center">
          <p>Thoughtfully selected. Made for everyday life.</p>
          <p>THE COLLECTION © 2026</p>
        </footer>
      </div>

      <style>{`
        @keyframes shopCardEnter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
};

export default Shop;
