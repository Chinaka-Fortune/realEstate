import React from "react";
// import NewPropertiesComp from "./NewPropertiesComp";
import propertyDev from "./newPropImages/Property-Development-Fateck-4.jpg";
import "./newProperties.css";
import "../index.css";
const NewProperties = () => {
  return (
    <div>
      <img src={propertyDev} alt="" className="propertyBanner" />

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-4 ms-5 bb p-2 rounded-4">
           <img src={propertyDev} alt="" />
          </div>
          <div className="try">

          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProperties;
