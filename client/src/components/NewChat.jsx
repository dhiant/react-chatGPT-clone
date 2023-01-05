import React from "react";

const NewChat = ({ setChatLog }) => {
 return (
    <div className="sideMenuButton" onClick={() => setChatLog([])}>
      <span>+</span>
      New chat
    </div>
  );
};

export default NewChat;
