import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "@/pages/About";
import Shop from "@/pages/Shop";
import Cart from "@/pages/Cart";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
