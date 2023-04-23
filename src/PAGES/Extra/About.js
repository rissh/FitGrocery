//
import React, { useEffect } from "react";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import SingleBanner from "../../COMPONENTS/Banners/SingleBanner";
import FooterBanner from "../../COMPONENTS/Footer/FooterBanner";
import Footer from "../../COMPONENTS/Footer/Footer";
import Banner4 from "../../ASSETS/Banner/Banner4.jpg";
import Banner5 from "../../ASSETS/Banner/Banner5.jpg";
import "./ExtraPages.css";
//

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ExtraPage">
      <Navbar reloadnavbar={false} />
      <SingleBanner
        heading="About Us"
        BannerImage="https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
      <div className="SectionLeft common">
        <img src="https://images.pexels.com/photos/3167310/pexels-photo-3167310.jpeg?auto=compress&cs=tinysrgb&w=800" />
        <div>
          <h1>History</h1>
          <p>
            FitGrocery was founded in 2020 by John Smith with the goal of
            providing high-quality groceries to customers at affordable prices.
            The company quickly gained a reputation for its excellent selection
            of fresh produce, meats, and pantry items. In 2022, FitGrocery
            expanded its online presence with the launch of its e-commerce
            website, allowing customers to easily browse and purchase products
            from the comfort of their homes. The website quickly became a hit
            among busy professionals and families looking for convenient ways to
            shop for groceries. Today, FitGrocery is one of the leading grocery
            retailers in the country, with a loyal customer base and a
            reputation for quality and convenience. The company continues to
            innovate and expand, with plans to open new brick-and-mortar stores
            in key locations and to introduce new products and services in the
            coming years.
          </p>
        </div>
      </div>

      <div className="SectionRight common">
        <img src="https://images.pexels.com/photos/2449665/pexels-photo-2449665.jpeg?auto=compress&cs=tinysrgb&w=800" />
        <div>
          <h1>Who are we</h1>
          <p>
            FitGrocery is a family-owned and operated business that was founded
            in 2010 by Rishikesh Jagadale, also known as Little Monster.
            Rishikesh had a passion for healthy living and wanted to make it
            easier for people to access high-quality groceries. He started
            FitGrocery as a small online store, offering a limited selection of
            fruits and vegetables. Over the years, FitGrocery has grown
            significantly and now offers a wide range of groceries, including
            meats, pantry items, and more. We are committed to providing our
            customers with the freshest, highest-quality products available. Our
            team carefully selects each item that we offer and works directly
            with local farmers and suppliers to ensure that we are providing the
            best possible products.
          </p>
        </div>
      </div>
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default About;
