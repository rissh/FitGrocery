import React from "react";
import "./SingleBanner.css";

const SingleBanner = ({ BannerImage, heading }) => {
  return (
    <div className="Singlebanner">
      <div className="BannerImgFilter"></div>
      <img className="BannerImg" src={BannerImage} alt="noimg" />
      <div className="BannerHeading">
        <h1>{heading}</h1>
      </div>
    </div>
  );
};

export default SingleBanner;
