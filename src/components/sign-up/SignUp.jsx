import React from "react";

import FormInput from "../form-input/FormInput";
import CustomButtom from "../custom-buttom/CustomButton";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./SignUp.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

    } catch (error) {
      
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="SignUp">
        <h2 className="Title">I do not have a account</h2>
        <span>Sign up with your email and password</span>

        <form className="SignUpForm" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            label="Display Name"
            value={displayName}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="email"
            type="email"
            label="Email"
            value={email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="confirmPassword"
            type="password"
            label="Confimr Password"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />

          <CustomButtom type="submit"> Sign up </CustomButtom>
        </form>
      </div>
    );
  }
}

export default SignUp;
