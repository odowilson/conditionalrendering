import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {props.isRegistered === true ? null : (
        <Input type="password" placeholder="Confirm Password" />
      )}
      {props.isRegistered === true ? (
        <Button buttonName="Login" />
      ) : (
        <Button buttonName="Register" />
      )}
    </form>
  );
}

export default Form;
