import React from "react";
import "../Home.css";
const OurPopularHomeComp = ({
  popularHomepix,
  popularHomeText,
  popularHomeSize,
  popularHomeLocation,
  popularHomeprice,
  agentName,
  myStyle
}) => {
  return (
    <div className="container pb-4">
      <div className="imageDiv position-relative" style={{myStyle}}>
        <img src={popularHomepix} alt="" />
        <div className="lh-1 position-absolute popularText px-2 pt-2 ">
          <p className="text-white fw-bolder">{popularHomeText}</p>
          <p className="text-white fw-bolder">Size: {popularHomeSize}</p>
          <p className="text-white fw-bolder">Location: {popularHomeLocation}</p>
          <p className="text-white fw-bolder">Home price:{popularHomeprice}</p>
          <p className="text-white fw-bolder">Agent Name:{agentName}</p>
        </div>
      </div>
    </div>
  );
};

export default OurPopularHomeComp;
