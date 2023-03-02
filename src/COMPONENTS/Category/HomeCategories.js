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
          <h1>Vegetables at your doorstep</h1>
          <p> Shop vegetables now</p>
        </div>
      </div>
      <div className="HomeContainer">
        <img src={img2} alt="image2" />
        <div className="content">
          <h1>Vegetables at your doorstep</h1>
          <p> Shop vegetables now</p>
        </div>
      </div>
      <div className="HomeContainer">
        <img src={img3} alt="image3" />
        <div className="content">
          <h1>Vegetables at your doorstep</h1>
          <p> Shop vegetables now</p>
        </div>
      </div>
      <div className="HomeContainer">
        <img src={img4} alt="image4" />
        <div className="content">
          <h1>Vegetables at your doorstep</h1>
          <p> Shop vegetables now</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
