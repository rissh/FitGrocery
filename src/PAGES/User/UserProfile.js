import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import Footer from "../../COMPONENTS/Footer/Footer";
import FooterBanner from "../../COMPONENTS/Footer/FooterBanner";
import SingleBanner from "../../COMPONENTS/Banners/SingleBanner";
import UserSidebar from "../../COMPONENTS/UserProfile/UserSidebar";
import AccountSetting from "../../COMPONENTS/UserProfile/AccountSetting";
import ChangePassword from "../../COMPONENTS/UserProfile/ChangePassword";
import YourOrders from "../../COMPONENTS/UserProfile/YourOrders";
import UserAddress from "../../COMPONENTS/UserProfile/UserAddress";
import LegalNotice from "../../COMPONENTS/UserProfile/LegalNotice";
import "./UserProfile.css";

const UserProfile = () => {
  const { activepage } = useParams();
  //alert(activepage);
  return (
    <div className="UserProfile">
      <Navbar />
      <SingleBanner
        heading={`My Profile`}
        BannerImage="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      />

      <div className="MainContainer">
        <div className="LeftContainer">
          <UserSidebar activepage={activepage} />
        </div>

        <div className="RightContainer">
          {activepage === "accountsettings" && <AccountSetting />}
          {activepage === "changepassword" && <ChangePassword />}
          {activepage === "yourorders" && <YourOrders />}
          {activepage === "address" && <UserAddress />}
          {activepage === "legalnotice" && <LegalNotice />}
        </div>
      </div>

      <FooterBanner />
      <Footer />
    </div>
  );
};

export default UserProfile;
