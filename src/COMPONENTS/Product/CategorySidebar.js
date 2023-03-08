import React from "react";
import "./CategorySidebar.css";
import img1 from "../../ASSETS/Images/1.png";
import img2 from "../../ASSETS/Images/2.png";
import img3 from "../../ASSETS/Images/3.png";
import img4 from "../../ASSETS/Images/4.png";

const CategorySidebar = () => {
  const data = [
    {
      id: 1,
      CategoryImage: img1,
      CategoryName: "Category 1",
    },
    {
      id: 2,
      CategoryImage: img2,
      CategoryName: "Category 2",
    },
    {
      id: 3,
      CategoryImage: img3,
      CategoryName: "Category 3",
    },
    {
      id: 4,
      CategoryImage: img4,
      CategoryName: "Category 4",
    },
    {
      id: 5,
      CategoryImage: img1,
      CategoryName: "Category 5",
    },
    {
      id: 6,
      CategoryImage: img2,
      CategoryName: "Category 6",
    },
    {
      id: 7,
      CategoryImage: img3,
      CategoryName: "Category 7",
    },
    {
      id: 8,
      CategoryImage: img4,
      CategoryName: "Category 8",
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
