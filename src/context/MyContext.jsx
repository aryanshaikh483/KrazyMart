import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MyStore = createContext();

export const MyContext = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [productCategoryFilter, setProductCategoryFilter] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [isInCart, setIsInCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [singleProduct, setSingleProduct] = useState(null);
  const [search, setSearch] = useState("");

  const [isLogged, setIsLogged] = useState(false);

  let getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("Api error", error);
    }
  };

  let removeProductFromCart = (id) => {
    setIsInCart((prev) => {
      return prev.filter((item) => item.id !== id )
    } )
  }

  useEffect(() => {
    getProductsData();
  }, []);

  const increamentQuantity = (id) => {
    setIsInCart((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
      });
    });
  };

  const decreamentQuantity = (id) => {
    setIsInCart((prev) => {
      const existingProduct = prev.find((item) => item.id === id);

      if (!existingProduct) return prev;

      if (existingProduct.quantity <= 1) {
        return prev.filter((item) => item.id !== id);
      }
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity - 1 } : val;
      });
    });
  };

  return (
    <MyStore.Provider
      value={{
        productsData,
        setProductsData,
        productCategoryFilter,
        setProductCategoryFilter,
        selectedCategory,
        setSelectedCategory,
        isLogged,
        setIsLogged,
        isInCart,
        setIsInCart,
        increamentQuantity,
        decreamentQuantity,
        isCartOpen,
        setIsCartOpen,
        singleProduct,
        setSingleProduct,
        search,
        setSearch,
        removeProductFromCart
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
