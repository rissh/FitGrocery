import React from "react";
import AllProduct from "./AllProduct";
import CategorySidebar from "./CategorySidebar";
import "./ProductSidebar.css";

const ProductSidebar = () => {
  return (
    <div className="ProductSidebar">
      <CategorySidebar />
      <AllProduct />
    </div>
  );
};

export default ProductSidebar;
