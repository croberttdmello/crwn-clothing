import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./Header.scss";

const Header = () => (
  <div className="Header">
    <Link to="/" className="LogoContainer">
      <Logo className="Logo" />
    </Link>
    <div className="Options">
      <Link className="Option" to="/shop">
        SHOP
      </Link>

      <Link className="Option" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
