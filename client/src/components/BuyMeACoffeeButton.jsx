import React from "react";

const BuyMeACoffeeButton = () => {
  const style = {
    backgroundColor: "#FFDD00",
  };
  return (
    <div style={style}>
      <a
        href="https://www.buymeacoffee.com/sushantdhimal"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/buymeacoffee.png"
          alt="Buy Me A Coffee Widget"
          style={{
            height: "40px",
            position: "relative",
            left: "4px",
            display: "block",
          }}
        />
      </a>
    </div>
  );
};

export default BuyMeACoffeeButton;
