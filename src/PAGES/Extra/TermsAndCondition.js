import React, { useEffect } from "react";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import SingleBanner from "../../COMPONENTS/Banners/SingleBanner";
import FooterBanner from "../../COMPONENTS/Footer/FooterBanner";
import Footer from "../../COMPONENTS/Footer/Footer";

const TermsAndCondition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="TermsAndCondition ExtraPage">
      <Navbar />
      <SingleBanner
        BannerImage="https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        heading="Terms & Conditions"
      />

      <div className="Container">
        <h1>FitGrocery Terms and Conditions</h1>
        <p>
          Welcome to FitGrocery, a website that offers high-quality groceries to
          customers. By using this website, you agree to comply with the terms
          and conditions outlined below.
        </p>
      </div>
      <div className="Container">
        <h2>Use of Website</h2>
        <p>
          You agree to use this website only for lawful purposes and in a way
          that does not infringe upon the rights of others. You also agree not
          to use the website in a way that could damage, disable, or impair the
          site or interfere with any other party's use of the site.
        </p>
      </div>
      <div className="Container">
        <h2>Product Information</h2>
        <p>
          We strive to provide accurate and up-to-date information about our
          products. However, we cannot guarantee that all information on the
          site is error-free, complete, or current. We reserve the right to make
          changes to our products and their prices at any time without notice.
        </p>
      </div>
      <div className="Container">
        <h2>Payment and Delivery</h2>
        <p>
          All prices are in the local currency and payment is due at the time of
          purchase. We accept various payment methods, including credit cards
          and online payment services. Once payment is received, we will arrange
          for the delivery of your items to your designated address.
        </p>
      </div>
      <div className="Container">
        <h2>Returns and Refunds</h2>
        <p>
          If you receive a product that is damaged or defective, please contact
          us immediately to arrange for a replacement or refund. We may require
          proof of purchase or photographic evidence of the damage. We reserve
          the right to refuse returns or refunds in certain circumstances.
        </p>
      </div>
      <div className="Container">
        <h2>Intellectual Property</h2>
        <p>
          All content on this site, including text, graphics, logos, and images,
          is the property of FitGrocery or its affiliates and is protected by
          copyright laws. You may not use any content from this site without our
          express written permission.
        </p>
      </div>
      <div className="Container">
        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold FitGrocery, its affiliates, and their
          respective officers, directors, employees, and agents harmless from
          any claims, losses, damages, liabilities, or expenses arising out of
          your use of this site or any violation of these terms and conditions.
        </p>
      </div>
      <div className="Container">
        <h2>Governing Law and Jurisdiction</h2>
        <p>
          These terms and conditions shall be governed by and construed in
          accordance with the laws of the jurisdiction in which FitGrocery is
          based. Any disputes arising out of these terms and conditions or your
          use of this site shall be resolved exclusively in the courts of that
          jurisdiction. do this for same
        </p>
      </div>

      <FooterBanner />
      <Footer />
    </div>
  );
};

export default TermsAndCondition;
