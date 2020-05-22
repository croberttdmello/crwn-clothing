import React from "react";

import "./FormInput.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="Group">
    <input className="FormInput" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${otherProps.value.lenght ? "Shrink" : ""} FormInputLabel`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
