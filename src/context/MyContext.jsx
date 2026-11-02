import { createContext, useState } from "react";

export const MyStore = createContext();

export const MyContext = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [productCategoryFilter, setProductCategoryFilter] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [isLogged, setIsLogged] = useState(true);
  const [isInCart, setIsInCart] = useState([]);

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
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
