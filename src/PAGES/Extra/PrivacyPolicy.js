import React, { useEffect } from "react";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import SingleBanner from "../../COMPONENTS/Banners/SingleBanner";
import FooterBanner from "../../COMPONENTS/Footer/FooterBanner";
import Footer from "../../COMPONENTS/Footer/Footer";

import "./ExtraPages.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="PrivacyPolicy ExtraPage">
      <Navbar />
      <SingleBanner
        BannerImage="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80"
        heading="Privacy Policy"
      />

      <div className="Container">
        <h1>Privacy Policy</h1>
        <p>
          At FitGrocery, we are committed to protecting the privacy of our
          users. This privacy policy outlines the types of information we
          collect, how we use it, and how we protect it.
        </p>
      </div>
      <div className="Container">
        <h2>Information Collection and Use</h2>
        <p>
          We collect personal information when you register for an account or
          place an order on our website. This information may include your name,
          email address, phone number, shipping and billing addresses, and
          payment information. We use this information to fulfill your orders,
          communicate with you about your orders, and improve our website and
          services.
        </p>
        <p>
          We may also collect non-personal information such as your IP address,
          browser type, and operating system. We use this information to improve
          our website and services and to analyze trends and usage patterns.
        </p>
      </div>
      <div className="Container">
        <h2>Information Sharing and Disclosure</h2>
        <p>
          We do not sell or rent your personal information to third parties. We
          may share your information with third-party service providers who
          assist us with our business operations, such as payment processors and
          shipping carriers. We only share the information necessary to complete
          the specific task for which the service provider has been engaged.
        </p>
        <p>
          We may also share your information if we believe it is necessary to
          comply with applicable laws, regulations, or legal processes, or to
          protect our rights, property, or safety or that of our users.
        </p>
      </div>
      <div className="Container">
        <h2>Data Security</h2>
        <p>
          We take reasonable measures to protect the personal information we
          collect against unauthorized access, alteration, disclosure, or
          destruction. These measures include physical, electronic, and
          procedural safeguards.
        </p>
      </div>
      <div className="Container">
        <h2>Cookies</h2>
        <p>
          We use cookies and other similar technologies to personalize your
          experience on our website and to track usage patterns. You can control
          the use of cookies through your browser settings.
        </p>
      </div>
      <div className="Container">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about our privacy policy or the information
          we collect, please contact us at privacy@fitgrocery.com.
        </p>
      </div>

      <FooterBanner />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
