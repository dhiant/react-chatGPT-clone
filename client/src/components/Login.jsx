import React from "react";
import Button from "./Button";
import SvgComponent from "./SvgComponent";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginContainerContent">
        <SvgComponent w={50} h={50} />
        <h1>Welcome to Talkbot</h1>
        <p>Your Ultimate AI Assistant</p>
        <div className="loginButtonWrapper">
          <Button text="Log in" />
          <Button text="Sign up" />
        </div>
      </div>
    </div>
  );
};

export default Login;
