import React from "react";
import photo from "../../images/im2.jpg";
import "./ProfilePhoto.css";
const ProfilePhoto = () => {
  return (
    <div className="pp">
      <div className="ppimg">
        <img src={photo} width={650} height={650} />
      </div>
    </div>
  );
};

export default ProfilePhoto;
