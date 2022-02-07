import React from "react";
import "../css/MyHeader.css";

const MyHeader = () => {
  return (
    <>
      <nav className="Nav">
        <div className="left-navbar-items">
          <h3 className="nav-text">My First React App</h3>
        </div>
        <div className="center-navbar-items">
          <a href="#"> More info</a>
          <a href="#"> Contact us</a>
          <a href="#"> Menu</a>
        </div>
        <div className="rigth-navbar-items">
          <button className="btn">Sign up</button>
          <button className="btn">Login</button>
        </div>
      </nav>
    </>
  );
};

export default MyHeader;
