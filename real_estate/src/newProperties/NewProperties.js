import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath } from "@fortawesome/free-solid-svg-icons";
import propertyDev from "./newPropImages/Property-Development-Fateck-4.jpg";
import redHouse from "./newPropImages/redHouse.jpg";
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
          <div className="  d-flex justify-content-center align-items-center ">
            <div className="col-3 b">
            <div className="newPropertyImageDdivCard">
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
                <div className="propertyinformation lh-1">
                  <h4 className=" text-white">4 Bedroom duplex</h4>
                  <div className="d-flex column-gap-3 lh-1">
                    <p className=" fw-bold text-white">
                      <FontAwesomeIcon icon={faBed} className="me-2 fw-bold" />7
                    </p>
                    <p className=" fw-bold text-white">
                      <FontAwesomeIcon
                        icon={faBath}
                        className="me-2  fw-bold"
                      />
                      7
                    </p>
                    <p className=" fw-bold text-white">
                      <i class="bi bi-arrows-fullscreen me-2  fw-bolder"></i>
                      500sqm
                    </p>
                    <button className="rounded-pill px-3 border-2  bg-transparent text-white d-flex align-items-center">
                      <i class="bi bi-telephone-outbound-fill text-success"></i>
                    </button>
                  </div>
                  <div className="d-flex align-items-center column-gap-2">
                    <div className="newPropertyAgentDiv">
                      <img src={propertyDev} alt="" />
                    </div>
                    <h6 className="text-white">ziff Properties</h6>
                    <button className="px-4 py-1  rounded-pill border-2 bg-transparent">
                      <i class="bi bi-whatsapp text-success fw-bolder"></i>
                    </button>
                  </div>
                  <div className="mt-2 d-flex column-gap-3 align-items-center">
                    <button className="px-3 rounded-pill bg-transparent text-white py-1 fw-bold">
                      <em>View more Details</em>{" "}
                      <i class="bi bi-arrow-right-circle"></i>
                    </button>
                    <div onClick={handleIcon}>{favouriteColour}</div>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="pointerCursorStyle"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-3 b">
            <div className="newPropertyImageDdivCard">
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
                <div className="propertyinformation lh-1">
                  <h4 className=" text-white">4 Bedroom duplex</h4>
                  <div className="d-flex column-gap-3 lh-1">
                    <p className=" fw-bold text-white">
                      <FontAwesomeIcon icon={faBed} className="me-2 fw-bold" />7
                    </p>
                    <p className=" fw-bold text-white">
                      <FontAwesomeIcon
                        icon={faBath}
                        className="me-2  fw-bold"
                      />
                      7
                    </p>
                    <p className=" fw-bold text-white">
                      <i class="bi bi-arrows-fullscreen me-2  fw-bolder"></i>
                      500sqm
                    </p>
                    <button className="rounded-pill px-3 border-2  bg-transparent text-white d-flex align-items-center">
                      <i class="bi bi-telephone-outbound-fill text-success"></i>
                    </button>
                  </div>
                  <div className="d-flex align-items-center column-gap-2">
                    <div className="newPropertyAgentDiv">
                      <img src={propertyDev} alt="" />
                    </div>
                    <h6 className="text-white">ziff Properties</h6>
                    <button className="px-4 py-1  rounded-pill border-2 bg-transparent">
                      <i class="bi bi-whatsapp text-success fw-bolder"></i>
                    </button>
                  </div>
                  <div className="mt-2 d-flex column-gap-3 align-items-center">
                    <button className="px-3 rounded-pill bg-transparent text-white py-1 fw-bold">
                      <em>View more Details</em>{" "}
                      <i class="bi bi-arrow-right-circle"></i>
                    </button>
                    <div onClick={handleIcon}>{favouriteColour}</div>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="pointerCursorStyle"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 b">
            <div className="newPropertyImageDdivCard">
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
                <div className="propertyinformation lh-1">
                  <h4 className=" text-white">4 Bedroom duplex</h4>
                  <div className="d-flex column-gap-3 lh-1">
                    <p className=" fw-bold text-white">
                      <FontAwesomeIcon icon={faBed} className="me-2 fw-bold" />7
                    </p>
                    <p className=" fw-bold text-white">
                      <FontAwesomeIcon
                        icon={faBath}
                        className="me-2  fw-bold"
                      />
                      7
                    </p>
                    <p className=" fw-bold text-white">
                      <i class="bi bi-arrows-fullscreen me-2  fw-bolder"></i>
                      500sqm
                    </p>
                    <button className="rounded-pill px-3 border-2  bg-transparent text-white d-flex align-items-center">
                      <i class="bi bi-telephone-outbound-fill text-success"></i>
                    </button>
                  </div>
                  <div className="d-flex align-items-center column-gap-2">
                    <div className="newPropertyAgentDiv">
                      <img src={propertyDev} alt="" />
                    </div>
                    <h6 className="text-white">ziff Properties</h6>
                    <button className="px-4 py-1  rounded-pill border-2 bg-transparent">
                      <i class="bi bi-whatsapp text-success fw-bolder"></i>
                    </button>
                  </div>
                  <div className="mt-2 d-flex column-gap-3 align-items-center">
                    <button className="px-3 rounded-pill bg-transparent text-white py-1 fw-bold">
                      <em>View more Details</em>{" "}
                      <i class="bi bi-arrow-right-circle"></i>
                    </button>
                    <div onClick={handleIcon}>{favouriteColour}</div>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="pointerCursorStyle"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 b">
            <div className="newPropertyImageDdivCard">
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
                <div className="propertyinformation lh-1">
                  <h4 className=" text-white">4 Bedroom duplex</h4>
                  <div className="d-flex column-gap-3 lh-1">
                    <p className=" fw-bold text-white">
                      <FontAwesomeIcon icon={faBed} className="me-2 fw-bold" />7
                    </p>
                    <p className=" fw-bold text-white">
                      <FontAwesomeIcon
                        icon={faBath}
                        className="me-2  fw-bold"
                      />
                      7
                    </p>
                    <p className=" fw-bold text-white">
                      <i class="bi bi-arrows-fullscreen me-2  fw-bolder"></i>
                      500sqm
                    </p>
                    <button className="rounded-pill px-3 border-2  bg-transparent text-white d-flex align-items-center">
                      <i class="bi bi-telephone-outbound-fill text-success"></i>
                    </button>
                  </div>
                  <div className="d-flex align-items-center column-gap-2">
                    <div className="newPropertyAgentDiv">
                      <img src={propertyDev} alt="" />
                    </div>
                    <h6 className="text-white">ziff Properties</h6>
                    <button className="px-4 py-1  rounded-pill border-2 bg-transparent">
                      <i class="bi bi-whatsapp text-success fw-bolder"></i>
                    </button>
                  </div>
                  <div className="mt-2 d-flex column-gap-3 align-items-center">
                    <button className="px-3 rounded-pill bg-transparent text-white py-1 fw-bold">
                      <em>View more Details</em>{" "}
                      <i class="bi bi-arrow-right-circle"></i>
                    </button>
                    <div onClick={handleIcon}>{favouriteColour}</div>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="pointerCursorStyle"
                    />
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
