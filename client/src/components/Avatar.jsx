import React from "react";

const Avatar = ({ children, bg, className }) => {
  return (
    <div id="avatar" style={{ backgroundColor: `${bg}` }}>
      <div className={className}>{children}</div>
    </div>
  );
};

export default Avatar;
