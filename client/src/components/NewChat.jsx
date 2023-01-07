import React from "react";

const NewChat = ({ setChatLog, setShowMenu }) => {
  return (
    <div
      className="sideMenuButton"
      onClick={() => {
        setChatLog([]);
        setShowMenu(false);
      }}
    >
      <span>+</span>
      New chat
    </div>
  );
};

export default NewChat;
