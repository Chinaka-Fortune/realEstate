import React from "react";
import shaggi from "../popularHomeDetails/popularVideo/shaggi.mp4";

import "../popularHomeDetails/popularHomedetails.css"
const PopularDetails = () => {
  return (
    <>
        <video controls className="videoDiv">
            <source src={shaggi} type="video/mp4" />
            <source src={shaggi} type="video/ogg" />
            Your browser does not support HTML video.
          </video>
      <div className="row">
        <div className="col-md-7 videoDiv">
          
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">swjldkl;psok;jdhlgjbknml</div>
      </div>
    </>
  );
};

export default PopularDetails;
