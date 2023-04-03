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
        heading="Your Cart"
        BannerImage="https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default Cart;
