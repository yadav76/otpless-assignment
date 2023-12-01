import React, { useState } from "react";
import "./styles.css";
import fb from "./images/fb.png";
import gp from "./images/gp.png";
import tw from "./images/tw.png";

const Login = () => {
  const [changeTab, setChangeTab] = useState(true);
  return (
    <>
      <div className="container">
        <div className="form-box">
          <div className="button-box">
            <div id="btn" style={{ left: !changeTab ? "110px" : "0px" }}></div>
            <button
              className="toggle-btn"
              onClick={() => setChangeTab(!changeTab)}
            >
              Login
            </button>
            <button
              className="toggle-btn"
              onClick={() => setChangeTab(!changeTab)}
            >
              Register
            </button>
          </div>
          <div className="social-icons">
            <img src={fb} alt="Facebook Image" />
            <img src={gp} alt="Google Image" />
            <img src={tw} alt="Twitter Image" />
          </div>
          {changeTab ? (
            <form id="login" className="input-group">
              <input
                type="text"
                className="input-field"
                placeholder="User Id"
                required
              />
              <input
                type="password"
                className="input-field"
                placeholder="Enter Password"
                required
              />
              <input type="checkbox" className="check-box" id="" />
              <span>Remember Password</span>
              <button type="submit" className="submit-btn">
                Log in
              </button>
            </form>
          ) : (
            <form id="register" className="input-group">
              <input
                type="text"
                className="input-field"
                placeholder="User Id"
                required
              />
              <input
                type="email"
                className="input-field"
                placeholder="Email Id"
                required
              />
              <input
                type="password"
                className="input-field"
                placeholder="Enter Password"
                required
              />
              <input type="checkbox" className="check-box" id="" />
              <span>I agree to the terms & conditions</span>
              <button type="submit" className="submit-btn">
                Register
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
