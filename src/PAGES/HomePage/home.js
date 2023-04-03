import React from "react";
import BannerSlider from "../../COMPONENTS/Banners/BannerSlider";
import HomeCategories from "../../COMPONENTS/Category/HomeCategories";
import FooterBanner from "../../COMPONENTS/Footer/FooterBanner";
import Footer from "../../COMPONENTS/Footer/Footer";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import ProductSidebar from "../../COMPONENTS/Product/ProductSidebar";
import img11 from "../../ASSETS/Products/1.png";
import img12 from "../../ASSETS/Products/2.png";
import img13 from "../../ASSETS/Products/3.png";
import img14 from "../../ASSETS/Products/4.png";
import img15 from "../../ASSETS/Products/5.png";
import img16 from "../../ASSETS/Products/6.png";
import img17 from "../../ASSETS/Products/7.png";
import img18 from "../../ASSETS/Products/8.png";
import ProductSlider from "../../COMPONENTS/Product/ProductSlider";

const home = () => {
  const products = [
    {
      id: 1,
      productimage: img11,
      productname: "Product 1",
      productprice: 100,
      counttype: "1 each",
      discountprecent: 12,
    },
    {
      id: 2,
      productimage: img12,
      productname: "Product 2",
      productprice: 200,
      counttype: "1 per kg",
      discountprecent: 12,
    },
    {
      id: 3,
      productimage: img13,
      productname: "Product 3",
      productprice: 300,
      counttype: "1 per kg",
      discountprecent: 19,
    },
    {
      id: 4,
      productimage: img14,
      productname: "Product 4",
      productprice: 400,
      counttype: "1 per kg",
      discountprecent: 12,
    },
    {
      id: 5,
      productimage: img15,
      productname: "Product 5",
      productprice: 100,
      counttype: "1 each",
      discountprecent: 12,
    },
    {
      id: 6,
      productimage: img16,
      productname: "Product 6",
      productprice: 200,
      counttype: "1 per kg",
      discountprecent: 12,
    },
    {
      id: 7,
      productimage: img17,
      productname: "Product 7",
      productprice: 300,
      counttype: "1 per kg",
      discountprecent: 19,
    },
    {
      id: 8,
      productimage: img18,
      productname: "Product 8",
      productprice: 400,
      counttype: "1 per kg",
      discountprecent: 12,
    },
  ];
  return (
    <div>
      <Navbar reloadnavbar={false} />
      <BannerSlider />
      <HomeCategories />
      <ProductSidebar />
      <div className="SliderContainer">
        <ProductSlider product={products} categoryname="Related Products" />
      </div>

      <div className="SliderContainer">
        <ProductSlider product={products} categoryname="More Products" />
      </div>
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default home;
