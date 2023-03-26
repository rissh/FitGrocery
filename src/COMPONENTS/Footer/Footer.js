import React from "react";
import payImg from "../../ASSETS/pay.png";
import logo from "../../ASSETS/logo.png";
import social from "../../ASSETS/social.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Section1">
        <div className="Info">
          <img src={logo} alt="company logo" className="logo" />
          <p>
            Fit Grocery is a leading online grocery store in the India. We are
            committed to providing the best quality products at the best prices.
          </p>
          <img src={social} alt="social" className="social" />
        </div>
        <div className="AboutUs">
          <h3>About Us</h3>
          <p>About us</p>
          <p>Contact us</p>
          <p>About team</p>
          <p>Customer Support</p>
        </div>
        <div className="OurInfo">
          <h3>Our Information</h3>
          <p>Privacy policy update</p>
          <p>Terms & conditions</p>
          <p>Return Policy</p>
          <p>Site Map</p>
        </div>
        <div className="Community">
          <h3>Community</h3>
          <p>Announcements</p>
          <p>Answer center</p>
          <p>Discussion boards</p>
          <p>Giving works</p>
        </div>
        <div className="Subscribe">
          <h3>Subscribe Now</h3>
          <p>
            Subscribe your email for newsletter and featured news based on your
            interest
          </p>
          <div className="inputcontainer">
            <span className="icon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                />
              </svg>
            </span>
            <input type="text" placeholder="Enter your email" />
            <span className="icon2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      {/* New Section */}
      <div className="Section2">
        <h3>© Copyright 2023 Fit Grocery, Inc. All rights reserved</h3>
        <img src={payImg} alt="payimg" />
      </div>
    </div>
  );
};

export default Footer;
