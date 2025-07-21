import React from "react";
import NewPropertiesComp from "./NewPropertiesComp";
import propertyDev from "./newPropImages/Property-Development-Fateck-4.jpg";
import "./newProperties.css";
import "../index.css";
const NewProperties = () => {
  return (
    <div>
      <img src={propertyDev} alt="" className="propertyBanner" />

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-2 bb">
            <img src={propertyDev} alt="" className="rounded" />
            <div>
              <p>location</p>
              <p>agent</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProperties;
