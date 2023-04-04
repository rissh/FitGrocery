import React from "react";
import ProductCard from "./ProductCard";
import "./AllProduct.css";
import prod1 from "../../ASSETS/Products/1.png";
import prod2 from "../../ASSETS/Products/2.png";
import prod3 from "../../ASSETS/Products/3.png";
import prod4 from "../../ASSETS/Products/4.png";
import prod5 from "../../ASSETS/Products/5.png";
import prod6 from "../../ASSETS/Products/6.png";
import prod7 from "../../ASSETS/Products/7.png";
import prod8 from "../../ASSETS/Products/8.png";

function AllProduct() {
  const product = [
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
