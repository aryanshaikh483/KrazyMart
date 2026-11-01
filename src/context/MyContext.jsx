import { createContext, useState } from "react";

export const MyStore = createContext();

export const MyContext = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [productCategoryFilter, setProductCategoryFilter] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [isLogged, setIsLogged] = useState(true);
  const [isInCart, setIsInCart] = useState([]);

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
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
