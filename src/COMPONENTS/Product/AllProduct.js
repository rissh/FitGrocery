import React from "react";
import ProductCard from "./ProductCard";
import "./AllProduct.css";
import img1 from "../../ASSETS/Products/1.png";
import img2 from "../../ASSETS/Products/2.png";
import img3 from "../../ASSETS/Products/3.png";
import img4 from "../../ASSETS/Products/4.png";
import img5 from "../../ASSETS/Products/5.png";
import img6 from "../../ASSETS/Products/6.png";
import img7 from "../../ASSETS/Products/7.png";
import img8 from "../../ASSETS/Products/8.png";

function AllProduct() {
  const product = [
    {
      id: 1,
      productimage: img1,
      productname: "Product 1",
      productprice: 100,
      counttype: "1 each",
      discountprecent: 12,
    },
    {
      id: 2,
      productimage: img2,
      productname: "Product 2",
      productprice: 200,
      counttype: "1 per kg",
      discountprecent: 12,
    },
    {
      id: 3,
      productimage: img3,
      productname: "Product 3",
      productprice: 300,
      counttype: "1 per kg",
      discountprecent: 19,
    },
    {
      id: 4,
      productimage: img4,
      productname: "Product 4",
      productprice: 400,
      counttype: "1 per kg",
      discountprecent: 12,
    },
    {
      id: 5,
      productimage: img5,
      productname: "Product 5",
      productprice: 100,
      counttype: "1 each",
      discountprecent: 12,
    },
    {
      id: 6,
      productimage: img6,
      productname: "Product 6",
      productprice: 200,
      counttype: "1 per kg",
      discountprecent: 12,
    },
    {
      id: 7,
      productimage: img7,
      productname: "Product 7",
      productprice: 300,
      counttype: "1 per kg",
      discountprecent: 19,
    },
    {
      id: 8,
      productimage: img8,
      productname: "Product 8",
      productprice: 400,
      counttype: "1 per kg",
      discountprecent: 12,
    },
  ];

  return (
    <div className="AllProduct">
      <h1>All Products</h1>
      <div className="product">
        {product.map((item) => {
          return <ProductCard data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default AllProduct;
