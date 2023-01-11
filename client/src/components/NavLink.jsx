import React from "react";

const NavLinks = ({ svg, link, text, setChatLog }) => {
  const handleClick = (text) => {
    if (text === "Clear Conversations") setChatLog([]);
  };
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
      onClick={() => handleClick(text)}
    >
      <div className="navPrompt">
        {svg}
        <p>{text}</p>
      </div>
    </a>
  );
};

export default NavLinks;
