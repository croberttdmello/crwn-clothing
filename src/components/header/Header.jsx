import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./Header.scss";

const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <div className="Option" onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT{" "}
        </div>
      ) : (
        <Link className="Option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
