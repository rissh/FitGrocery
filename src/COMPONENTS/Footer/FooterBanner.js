import React from "react";
import vege from "../../ASSETS/veges.png";
import "./FooterBanner.css";

const FooterBanner = () => {
  return (
    <div className="FooterBanner">
      <div className="Left">
        <img src={vege} alt="veges" />
      </div>
      <div className="Right">
        <div className="Text">
          <h1>Fresh Vegetables & Fruits at your doorstep</h1>
          <p>
            We deliver fresh vegetables & fruits at your doorstep. We deliver
            fresh vegetables & fruits at your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
