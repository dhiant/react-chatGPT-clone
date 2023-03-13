import React from "react";

const Button = ({ text, handleClick }) => {
  return (
    <button id="loginButton" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
