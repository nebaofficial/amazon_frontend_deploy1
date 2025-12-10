import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing/Landing.jsx';
import Auth from './Pages/Auth/Auths.jsx';
import Orders from './Pages/Orders/Orders.jsx';
import Payment from './Pages/Payment/Payment.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import Results from './Pages/Results/Results.jsx';
import ProductDetail from './Components/ProductDetail/ProductDetail.jsx';
import Auths from './Pages/Auth/Auths.jsx';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from './Components/protectedRoute/PotectedRoute.jsx';
const stripePromise = loadStripe('pk_test_51SZ4P2RkgjpCkTG2NCv4dOR9ainqfuocXnKpcblvSCApNwLAgsTHx5kH8SdekQwlPCPdJEzDJwfa1wJVxzdSFYYc000k8H68B1');
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Auths" element={<Auths />} />
        <Route path="/orders" element={
          
           <ProtectedRoute
            msg="YOU must login to see your orders" 
            redirectTo={"/orders"}>
            <Orders />
           </ProtectedRoute>
         }/>
        <Route path="/catagory/:catagoryName" element={<Results />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
   <Route
  path="/payment"
  element={
    <ProtectedRoute msg="YOU must login to pay" redirectTo={"/payment"}>
      <Elements stripe={stripePromise}>
        <Payment />
      </Elements>
    </ProtectedRoute>
  }
/>



        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default AppRouter
