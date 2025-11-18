import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing/Landing.jsx';
import Auth from './Pages/Auth/SignUp.jsx';
import Orders from './Pages/Orders/Orders.jsx';
import Payment from './Pages/Payment/Payment.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import Results from './Pages/Results/Results.jsx';
import ProductDeatil from './Components/ProdyctDEtail/ProductDeatil.jsx';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/catagory/:catagoryName" element={<Results />} />
        <Route path="/product/:productId" element={<ProductDeatil />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default AppRouter
