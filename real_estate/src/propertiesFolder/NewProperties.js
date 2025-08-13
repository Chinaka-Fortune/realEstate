import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faClock,
  faToilet,
} from "@fortawesome/free-solid-svg-icons";
import propertyDev from "./newPropImages/Property-Development-Fateck-4.jpg";
import redHouse from "./newPropImages/redHouse.jpg";
import newlyBuilt from "./newPropImages/13-Most-Expensive-Houses-In-Lagos.jpeg";
import house1 from "./newPropImages/house1.jpg";

import "./newProperties.css";
import "../index.css";
const NewProperties = () => {
  const [favouriteColour, setFavouriteColour] = useState(
    <i class="bi bi-heart text-white pointerCursorStyle"></i>
  );

  const handleIcon = () => {
    if (favouriteColour) {
      setFavouriteColour(
        <i class="bi bi-heart-fill pointerCursorStyle text-danger"></i>
      );
    } else if (favouriteColour === false) {
      setFavouriteColour(favouriteColour);
    }
  };

  return (
    <>
      <img src={propertyDev} alt="" className="propertyBanner" />

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="newPropertyContaner mx-auto align-contents-center d-flex flex-wrap">
            <div className="col-3 d-flex justify-content-center">
              <div className="newPropertyImageDdivCard generalBoxShadow">
                <div className="newPropertyImageDdiv">
                  <img src={redHouse} alt="" />
                </div>
                <div className="content">
                  <div className="price">
                    <p className="fw-bolder rounded-2 priceAmount">
                      ₦7,567,854,000
                    </p>
                    <p className="saleDetails text-white px-3 fw-bolder ms-3 mt-1 rounded-pill bg-succes">
                      For Sale
                    </p>
                  </div>
                  <div className="propertyinformation row lh-1">
                    <div className="col-9 mt-1 lh-1">
                      <p className=" text-white fw-bolder mt-1 text-truncate">
                        4 Bedroom duplex
                      </p>
                      <div className="d-flex column-gap-2 newPropertyicondetails">
                        <p className=" fw-bold text-white">
                          <FontAwesomeIcon
                            icon={faBed}
                            className="me-2 fw-bold"
                          />
                          7
                        </p>
                        <p className=" fw-bold text-white">
                          <FontAwesomeIcon
                            icon={faBath}
                            className="me-2  fw-bold"
                          />
                          5
                        </p>
                        <p className=" fw-bold text-white">
                          <FontAwesomeIcon
                            icon={faToilet}
                            className="me-2  fw-bold"
                          />
                          4
                        </p>
                        <p className=" fw-bold text-white">
                          <i class="bi bi-arrows-fullscreen me-2  fw-bolder"></i>
                          500sqm
                        </p>
                      </div>
                      <div className="d-flex align-items-center column-gap-2 newPropertyicondetails">
                        <div className="newPropertyAgentDiv">
                          <img src={propertyDev} alt="" />
                        </div>
                        <h6 className="text-white">ziff Properties</h6>
                      </div>
                    </div>

                    <div className="col-3 d-flex flex-column justify-content-center align-items-center row-gap-2 sociaMediaButtons">
                      <button className="px-4 py-1  rounded-pill border-2 bg-transparent d-flex justify-content-center whatsapp">
                        <i className="bi bi-whatsapp fw-bolder "></i>
                      </button>
                      <button className="rounded-pill px-4 py-1 border-2  bg-transparent  d-flex align-items-center telephone">
                        <i className="bi bi-telephone-outbound-fill "></i>
                      </button>

                      <div onClick={handleIcon}>{favouriteColour}</div>
                    </div>
                    <div className=" d-flex column-gap-3 align-items-center moreDetailsTime">
                      <button className="px-3 rounded-pill bg-transparent py-1 fw-bold">
                        <em>more Details</em>
                        <i class="bi bi-arrow-right-circle"></i>
                      </button>

                      <p className=" fw-bold text-info mt-3">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="me-2  fw-bold text-info"
                        />
                        2 weeks ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProperties;
