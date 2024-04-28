import React from "react";
import Home from "../pages/Home";
import Cart from "../Product/cart/Cart";
import ProductWrapper from "../Product/ProductOverview/ProductWrapper";
import Product from "../pages/Products";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Checkout from '../Product/CheckOut/Checkout'
import Order from "../order/Order";
import OrderDetail from "../order/OrderDetail";
const CustomerRoutes = () => {
  return (
    <div>
      <div>
        {/* Navbar */}
        <Navbar />
      </div>
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="/register" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductWrapper />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetail />} />
      </Routes>
       {/* Footer */}
       <Footer />
    </div>
  );
};

export default CustomerRoutes;
