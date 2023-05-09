import React from "react";
import "./CategorySidebar.css";
import img1 from "../../ASSETS/Categories/1.jpeg";
import img2 from "../../ASSETS/Categories/2.png";
import img3 from "../../ASSETS/Categories/3.png";
import img4 from "../../ASSETS/Categories/4.png";
import img5 from "../../ASSETS/Categories/5.png";
import img6 from "../../ASSETS/Categories/6.png";
import img7 from "../../ASSETS/Categories/7.png";
import img8 from "../../ASSETS/Categories/8.jpeg";

const CategorySidebar = () => {
  const data = [
    {
      id: 1,
      CategoryImage: img1,
      CategoryName: "Fruits",
    },
    {
      id: 2,
      CategoryImage: img2,
      CategoryName: "Vegetables",
    },
    {
      id: 3,
      CategoryImage: img3,
      CategoryName: "Meat and Poultry",
    },
    {
      id: 4,
      CategoryImage: img4,
      CategoryName: "Dairy and Eggs",
    },
    {
      id: 5,
      CategoryImage: img5,
      CategoryName: "Bakery and Bread",
    },
    {
      id: 6,
      CategoryImage: img6,
      CategoryName: "Beverages",
    },
    {
      id: 7,
      CategoryImage: img7,
      CategoryName: "Snacks & Sweets",
    },
    {
      id: 8,
      CategoryImage: img8,
      CategoryName: "Packaged Goods",
    },
  ];
  return (
    <div className="CategorySidebar">
      {data.map((item) => {
        return (
          <div className="category">
            <img src={item.CategoryImage} alt="CategoryImage" />
            <p>{item.CategoryName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySidebar;
