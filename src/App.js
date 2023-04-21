import React from "react";
import { Route, Routes, BrowerRouter, BrowserRouter } from "react-router-dom";
import Home from "./PAGES/HomePage/home";
import "./App.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Importing components
import ProductPage from "./PAGES/Product/ProductPage";
import About from "./PAGES/Extra/About";
import Contact from "./PAGES/Extra/Contact";
import Login from "./PAGES/Auth/Login";
import Signup from "./PAGES/Auth/Signup";
import ForgotPassword from "./PAGES/Auth/ForgotPassword";
import Cart from "./PAGES/Cart/Cart";
import UserProfile from "./PAGES/User/UserProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:prodid" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user/:activepage" element={<UserProfile />} />
        <Route
          path="*"
          element={
            <div>
              <h1>404 NOT FOUND</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
