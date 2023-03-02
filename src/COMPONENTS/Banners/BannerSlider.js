import React from "react";
import Slider from "react-slick";
import "./BannerSlider.css";
import img1 from "../../ASSETS/Images/1.png";
import Banner_1 from "../../ASSETS/Banner/Banner1.jpg";

const BannerSlider = () => {
  const data = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Fresh Vegetables and Fruits at your doorstep",
      description: "We deliver fresh vegetable and fruits at home",
      button: "#",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Fresh Vegetables and Fruits at your doorstep",
      description: "We deliver fresh vegetable and fruits at home",
      button: "#",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/3167310/pexels-photo-3167310.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Fresh Vegetables and Fruits at your doorstep",
      description: "We deliver fresh vegetable and fruits at home",
      button: "#",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/2449665/pexels-photo-2449665.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Fresh Vegetables and Fruits at your doorstep",
      description: "We deliver fresh vegetable and fruits at home",
      button: "#",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      title: "Fresh Vegetables and Fruits at your doorstep",
      description: "We deliver fresh vegetable and fruits at home",
      button: "#",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="BannerSlider">
      <Slider className="bannerSlider" {...settings}>
        {data.map((item) => {
          return (
            <div className="imageContainer" key={item.id}>
              <img src={item.image} alt="NoImage" />
              <div className="content">
                <h1>{item.title}</h1>
                <span>{item.description}</span>
                <button>Shop More</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BannerSlider;
