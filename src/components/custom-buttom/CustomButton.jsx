import React from "react";

import "./CustomButtom.scss";

const CustomButtom = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "GoogleSignIn" : ""} CustomButton`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButtom;
