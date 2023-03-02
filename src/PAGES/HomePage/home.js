import React from "react";
import BannerSlider from "../../COMPONENTS/Banners/BannerSlider";
import HomeCategories from "../../COMPONENTS/Category/HomeCategories";
import Navbar from "../../COMPONENTS/Navbar/Navbar";

const home = () => {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCategories />
    </div>
  );
};

export default home;
