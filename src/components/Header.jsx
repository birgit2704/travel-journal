import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="header-container">
      <img className="header-logo" src={logo} alt="logo" />
      <h2 className="header-title">my travel journal</h2>
    </div>
  );
}

export default Header;
