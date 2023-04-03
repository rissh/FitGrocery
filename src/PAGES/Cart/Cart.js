import React from "react";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import FooterBanner from "../../COMPONENTS/Footer/FooterBanner";
import Footer from "../../COMPONENTS/Footer/Footer";
import SingleBanner from "../../COMPONENTS/Banners/SingleBanner";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <SingleBanner
        heading="My Cart"
        bannerimage="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      />
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default Cart;
