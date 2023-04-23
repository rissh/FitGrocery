import React from "react";
import "./HomeCategories.css";
import img1 from "../../ASSETS/Images/1.png";
import img2 from "../../ASSETS/Images/2.png";
import img3 from "../../ASSETS/Images/3.png";
import img4 from "../../ASSETS/Images/4.png";

const HomeCategories = () => {
  return (
    <div className="HomeCategories">
      <div className="HomeContainer">
        <img src={img1} alt="image1" />
        <div className="content">
          <h1>Fruits</h1>
          <p> Fresh and delicious fruits delivered to your door </p>
        </div>
      </div>
      <div className="HomeContainer">
        <img src={img2} alt="image2" />
        <div className="content">
          <h1>Vegetables</h1>
          <p> Nutritious veggies handpicked just for you </p>
        </div>
      </div>
      <div className="HomeContainer">
        <img src={img3} alt="image3" />
        <div className="content">
          <h1>Meat</h1>
          <p> Premium cuts of meat for your next meal </p>
        </div>
      </div>
      <div className="HomeContainer">
        <img src={img4} alt="image4" />
        <div className="content">
          <h1>Dairy</h1>
          <p> Milk, cheese, butter, and more - all from local farms </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
