import React from "react";
import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath } from "@fortawesome/free-solid-svg-icons";
import propertyDev from "./newPropImages/Property-Development-Fateck-4.jpg";
import "./newProperties.css";
import "../index.css";
const NewProperties = () => {

  const detailsRef = useRef([]);
    const detailsImage = useRef([]);
    const updateActiveClass = useRef();
  
    useEffect(() => {
      detailsRef.current = Array.from(
        document.querySelectorAll("propertyinformation")
      );
      detailsImage.current = Array.from(
        document.querySelectorAll(".imageDivNewProperty .propertyDevImg")
      );
      // updateActiveClass();
    }, []);
  
    
  return (
    <>
      <img src={propertyDev} alt="" className="propertyBanner" />
     
      {/* <img src={propertyDev} alt="" className="propertyBanner" />

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-4 position-relative nnn ">
            <div className=" bg-success w-25 position-absolute top-0 left-3 py-2 rounded-pill text-center fw-bolder text-white">
              For Sell
            </div>
            <div className="try ">
              <img src={propertyDev} alt="" />
            </div>
            
            <div className="propertyinformation ">
              <h5 className=" text-white">4 Bedroom duplex</h5>
              <div className="d-flex column-gap-3">
                <p className="fs-6 fw-bold text-white">
                  <FontAwesomeIcon icon={faBed} className="me-2 fs-6 fw-bold" />
                  7
                </p>
                <p className="fs-6 fw-bold text-white">
                  <FontAwesomeIcon
                    icon={faBath}
                    className="me-2 fs-6 fw-bold"
                  />
                  7
                </p>
                <p className="fs-6 fw-bold text-white">
                  <i class="bi bi-arrows-fullscreen me-2 fs-6 fw-bolder"></i>
                  500sq
                </p>
              </div>
              <div className="d-flex align-items-center column-gap-2">
                <div className="newPropertyAgentDiv">
                  <img src={propertyDev} alt="" />
                </div>
                <h5 className="text-white">ziff Properties</h5>
              </div>
              <div className="d-flex column-gap-2 my-2">
                <button className="rounded-pill px-3 py-1 border-2  bg-transparent text-white fw-bold">
                  Call
                  <i class="bi bi-telephone-outbound-fill text-success ms-2"></i>
                </button>
                <button className="px-4 py-1 rounded-pill border-2 bg-transparent">
                  <i class="bi bi-whatsapp text-success fw-bolder"></i>
                </button>
              </div>
              <div>
                <button className="px-3 py-2 rounded-pill bg-transparent text-white">View more Details <i class="bi bi-arrow-right-circle"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default NewProperties;
