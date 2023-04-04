import React from "react";
import BannerSlider from "../../COMPONENTS/Banners/BannerSlider";
import HomeCategories from "../../COMPONENTS/Category/HomeCategories";
import FooterBanner from "../../COMPONENTS/Footer/FooterBanner";
import Footer from "../../COMPONENTS/Footer/Footer";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import ProductSidebar from "../../COMPONENTS/Product/ProductSidebar";
import prod1 from "../../ASSETS/Products/1.png";
import prod2 from "../../ASSETS/Products/2.png";
import prod3 from "../../ASSETS/Products/3.png";
import prod4 from "../../ASSETS/Products/4.png";
import prod5 from "../../ASSETS/Products/5.png";
import prod6 from "../../ASSETS/Products/6.png";
import prod7 from "../../ASSETS/Products/7.png";
import prod8 from "../../ASSETS/Products/8.png";
import prod9 from "../../ASSETS/Products/9.png";
import prod10 from "../../ASSETS/Products/10.png";
import prod11 from "../../ASSETS/Products/11.png";
import prod12 from "../../ASSETS/Products/12.png";
import prod13 from "../../ASSETS/Products/13.png";
import prod14 from "../../ASSETS/Products/14.png";
import prod15 from "../../ASSETS/Products/15.png";
import ProductSlider from "../../COMPONENTS/Product/ProductSlider";

const home = () => {
  const products = [
    {
      id: 1,
      productimage: prod1,
      productname: "Product 1",
      productprice: 100,
      counttype: "1 each",
      discountprecent: 12,
    },
    {
      id: 2,
      productimage: prod2,
      productname: "Product 2",
      productprice: 200,
      counttype: "1 per kg",
      discountprecent: 12,
    },
    {
      id: 3,
      productimage: prod3,
      productname: "Product 3",
      productprice: 300,
      counttype: "1 per kg",
      discountprecent: 19,
    },
    {
      id: 4,
      productimage: prod4,
      productname: "Product 4",
      productprice: 400,
      counttype: "1 per kg",
      discountprecent: 12,
    },
    {
      id: 5,
      productimage: prod5,
      productname: "Product 5",
      productprice: 100,
      counttype: "1 each",
      discountprecent: 12,
    },
    {
      id: 6,
      productimage: prod6,
      productname: "Product 6",
      productprice: 200,
      counttype: "1 per kg",
      discountprecent: 12,
    },
    {
      id: 7,
      productimage: prod7,
      productname: "Product 7",
      productprice: 300,
      counttype: "1 per kg",
      discountprecent: 19,
    },
    {
      id: 8,
      productimage: prod8,
      productname: "Product 8",
      productprice: 400,
      counttype: "1 per kg",
      discountprecent: 12,
    },
    {
      id: 9,
      productimage: prod9,
      productname: "Product 9",
      productprice: 18,
      counttype: "Per Kg",
      discountpercent: 5,
    },
    {
      id: 10,
      productimage: prod10,
      productname: "Product 10",
      productprice: 22,
      counttype: "Per Kg",
      discountpercent: 5,
    },
    {
      id: 11,
      productimage: prod11,
      productname: "Product 11",
      productprice: 199,
      counttype: "Per 200g",
      discountpercent: 10,
    },
    {
      id: 12,
      productimage: prod12,
      productname: "Product 12",
      productprice: 400,
      counttype: "1 per kg",
      discountprecent: 12,
    },
    {
      id: 13,
      productimage: prod13,
      productname: "Product 13",
      productprice: 32,
      counttype: "Per 100g",
      discountpercent: 2,
    },
    {
      id: 14,
      productimage: prod14,
      productname: "Product 14",
      productprice: 79,
      counttype: "Per Kg",
      discountpercent: 5,
    },
    {
      id: 15,
      productimage: prod15,
      productname: "Product 15",
      productprice: 20,
      counttype: "Per Packet",
      discountpercent: 10,
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
