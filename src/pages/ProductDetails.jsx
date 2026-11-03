import React, { useContext, useEffect } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Heart,
  Truck,
  ShieldCheck,
  RotateCcw,
  Star,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { MyStore } from "@/context/MyContext";
import ProductCard from "@/components/ProductCard";

const ProductDetails = () => {
  let {
    productsData,
    setSelectedCategory,
    setProductCategoryFilter,
    singleProduct,
    setSingleProduct,
    isInCart,
    setIsInCart,
    increamentQuantity,
    decreamentQuantity,
  } = useContext(MyStore);

  let navigate = useNavigate();

  let { id } = useParams();

  let getSingleProductData = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);

      setSingleProduct(res.data);
    } catch (error) {
      console.log("Product details errors", error);
    }
  };

  const relatedProducts = productsData.filter((product) => {
    if (product.id !== Number(id))
      return product.category === singleProduct?.category;
  });

  const addToCart = (product) => {
    setIsInCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);

      if (existingProduct) {
        return prev;
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  useEffect(() => {
    getSingleProductData();
  }, [id]);

  return (
    <div className="min-h-screen text-white px-6 md:px-12 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
        <button onClick={() => navigate("/shop")}>
          <ArrowLeft size={16} />
        </button>
        <span className="hover:text-white cursor-pointer">Products</span>
        <span>/</span>
        <span className="hover:text-white cursor-pointer">
          <button
            key={singleProduct?.category}
            onClick={() => {
              setSelectedCategory(singleProduct?.category);
              setProductCategoryFilter(singleProduct?.category);
              navigate("/shop");
            }}
          >
            {singleProduct?.category}
          </button>
        </span>
        <span>/</span>
        <span className="text-gray-300">{singleProduct?.title}</span>
      </div>

      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Product Image */}
        <div className="bg-white rounded-[30px] p-8 md:p-12 flex items-center justify-center">
          <img
            src={singleProduct?.image}
            alt={singleProduct?.title}
            className="w-full max-w-125 h-113 object-contain"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">
          {/* Category */}
          <span>{singleProduct?.category}</span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-5">
            {singleProduct?.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={17}
                  fill={star <= 4 ? "currentColor" : "none"}
                  className={star === 5 ? "text-gray-600" : ""}
                />
              ))}
            </div>
            <span className="text-gray-300 text-sm">4.2</span>
            <span className="text-gray-500 text-sm">(85 reviews)</span>
          </div>

          <div className="border-y border-white/20 py-5 mb-5">
            <h2 className="text-3xl font-bold text-[#C6FF00]">
              ${singleProduct?.price}
            </h2>{" "}
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-7 mb-8">
            {singleProduct?.description}
          </p>

          {/* Buttons */}

          {isInCart.some((item) => item.id === singleProduct?.id) ? (
            <div className="flex items-center justify-between gap-4 my-2 p-4">
              <div className="flex items-center justify-between gap-3 w-100 px-4 py-3 rounded-full border border-white/10 bg-[#111111] p-1">
                <button
                  onClick={() => decreamentQuantity(singleProduct.id)}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white/60 transition hover:bg-[#C6FF00] hover:text-black"
                >
                  <Minus size={30} />
                </button>

                <span className="min-w-6 text-center text-xl text-white">
                  {
                    isInCart.find((item) => item.id === singleProduct?.id)
                      ?.quantity
                  }
                </span>

                <button
                  onClick={() => increamentQuantity(singleProduct.id)}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white/60 transition hover:bg-[#C6FF00] hover:text-black"
                >
                  <Plus size={30} />
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => addToCart(singleProduct)}
              className="flex-1 flex items-center justify-center gap-3 bg-[#C6FF00] text-black font-semibold py-4 rounded-xl hover:bg-[#b5e600] transition"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          )}

          {/* Product Benefits */}
          <div className="grid grid-cols-3 gap-3">
            <div className="border border-white/30 rounded-2xl p-4 flex flex-col items-center text-center gap-3">
              <Truck size={20} className="text-[#C6FF00]" />
              <div>
                <p className="text-xs font-semibold text-gray-300">
                  Free Delivery
                </p>
                <p className="text-[10px] text-gray-500 mt-1">On orders $50+</p>
              </div>
            </div>

            <div className="border border-white/30 rounded-2xl p-4 flex flex-col items-center text-center gap-3">
              <ShieldCheck size={20} className="text-[#C6FF00]" />
              <div>
                <p className="text-xs font-semibold text-gray-300">
                  Secure Pay
                </p>
                <p className="text-[10px] text-gray-500 mt-1">256-bit SSL</p>
              </div>
            </div>

            <div className="border border-white/30 rounded-2xl p-4 flex flex-col items-center text-center gap-3">
              <RotateCcw size={20} className="text-[#C6FF00]" />
              <div>
                <p className="text-xs font-semibold text-gray-300">
                  Easy Returns
                </p>
                <p className="text-[10px] text-gray-500 mt-1">30-day policy</p>
              </div>
            </div>
          </div>

          {/* Previous / Next */}
          <div className="flex gap-4 mt-10">
            {Number(id) > 1 ? (
              <div className="flex gap-4 mt-10 w-200">
                <button
                  onClick={() => navigate(`/detail/${Number(id) - 1}`)}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#292929] text-gray-300 py-3.5 rounded-xl hover:bg-[#383838] transition"
                >
                  <ChevronLeft size={18} />
                  Previous
                </button>
                <button
                  onClick={() => navigate(`/detail/${Number(id) + 1}`)}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#C6FF00] text-black font-medium py-3.5 rounded-xl hover:bg-[#b5e600] transition"
                >
                  Next
                  <ChevronRight size={18} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigate(`/detail/${Number(id) + 1}`)}
                className="flex-1 flex items-center justify-center gap-2 bg-[#C6FF00] text-black font-medium py-3.5 rounded-xl hover:bg-[#b5e600] transition"
              >
                Next
                <ChevronRight size={18} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
        {/* Product Card 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
          {relatedProducts.map((val) => {
            return <ProductCard key={val.id} product={val} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
