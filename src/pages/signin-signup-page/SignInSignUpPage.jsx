import React from "react";

import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

import "./SignInSignUpPage.scss";

const SignInSignUpPage = () => (
  <div className="SignInSignUpPage">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
