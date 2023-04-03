import React from "react";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./AuthPage.css";
import Footer from "../../COMPONENTS/Footer/Footer";

const Login = () => {
  return (
    <div className="AuthPage">
      <Navbar reloadnavbar={false} />

      <div className="AuthContainer">
        <img
          src="https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          alt="login"
        />

        <form className="authform">
          <h1>Login</h1>
          <div className="formgroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div className="formgroup">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          <Link to="/forgotpassword" className="stylenone">
            <p>Forgot password?</p>
          </Link>
          <Link to="/" className="stylenone">
            <button className="btn">Login</button>
          </Link>
          <h2 className="or">OR</h2>
          <Link to="/signup" className="stylenone">
            <button className="btn">Signup</button>
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
