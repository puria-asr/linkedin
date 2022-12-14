import React from "react";
import "./ProfileIcon.css";
const ProfileIcon = ({ className, height }) => {
  return (
    <div className={className}>
      <img height={height} src="/images/profile.png" alt="icon" />
    </div>
  );
};

export default ProfileIcon;
