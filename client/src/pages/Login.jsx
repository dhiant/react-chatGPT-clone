import React, { useState } from "react";
import Button from "../components/Button";
import SvgComponent from "../components/SvgComponent";
import LoginForm from "../components/signup/SignUpForm";

const Login = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  const handleClick = async (purpose) => {
    if (purpose === "signup") {
      setIsLoginFormVisible(true);
    }
  };

  return (
    <>
      {!isLoginFormVisible ? (
        <div className="loginContainer">
          <div className="loginContainerContent">
            <SvgComponent w={50} h={50} />
            <h1>Welcome to Talkbot</h1>
            <p>Your Ultimate AI Assistant</p>
            <div className="loginButtonWrapper">
              <Button text="Log in" handleClick={() => handleClick("login")} />
              <Button
                text="Sign up"
                handleClick={() => handleClick("signup")}
              />
            </div>
          </div>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default Login;
