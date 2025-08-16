import React from "react";
import usingImage from "../propertiesFolder/newPropImages/redSearch.jpeg";
import propertiesLevels from "../propertiesFolder/newPropImages/13-Most-Expensive-Houses-In-Lagos.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faToilet } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "../agentFiles/agentFileImage/default-estate-agents-for-residential-rental-9.avif";

import "../index.css";
import "./newProperties.css";

const Properties = () => {
  return (
    <>
      <img src={propertiesLevels} alt="" className="propertyBanner" />
      <div className="propertiesContainer">

      <div className=" d-md-flex justify-content-center">
        <div className="propertySubContainer propertySubContainerImage  mx-auto ">
          <img src={usingImage} alt=""/>
          <NavLink
            to="/popularDetails"
            className="rounded-pill border-0 px-3 agentBtn text-decoration-none text-dark agentPostImageNavLink"
          >
            View More
          </NavLink>
        </div>
        <div className="propertySubContainer bg-secondary mx-auto lh-1 d-flex flex-column justify-content-center px-3 propertySubContainerBorder">
          <p className="fw-bolder">4 bed room duplex /detached house</p>
          <div className="propertiesText justify-content-between d-flex bg-primar">
            <div className="content">
              <p className="fw-bolder fs-5">₦7,563,345,000</p>
              <div className="propertiesIcons d-flex column-gap-2 ">
                <p className=" fw-bold ">
                  <FontAwesomeIcon icon={faBed} className="me-1 fw-bold" />7
                </p>
                <p className=" fw-bold ">
                  <FontAwesomeIcon icon={faBath} className="me-1  fw-bold" />5
                </p>
                <p className=" fw-bold ">
                  <FontAwesomeIcon icon={faToilet} className="me-1  fw-bold" />5
                </p>
                <p className=" fw-bold">
                  <i class="bi bi-arrows-fullscreen me-1 fw-bolder"></i>
                  500sqm
                </p>
              </div>
              
              <p className="fw-bolder">
                <i class="bi bi-geo-alt"></i> Lagos, Nigeria
              </p>
              <p className="fw-bold">
                <i class="bi bi-clock"></i> posted-
                <span className="text-muted">2 weeks ago</span>
              </p>
            </div>
            <div className="propertiesAgentProfile d-flex align-items-center">
              <NavLink className="agentMiniPic agentPostForSaleDetail rounded-circle">
                <img src={usingImage} alt="" className="rounded-circle" />
              </NavLink>
            </div>
          </div>
          <NavLink to='' className="d-flex flex-nowrap text-truncate fw-bold AgentNameAndPic text-decoration-none">
                Agent: benedict odigel idio kolawole
              </NavLink>
        </div>
      </div>
      </div>
      {/* <div className="container-fluid my-4">
        <div className="row">
          <div className="d-flex agentPostBigScreenWidth mx-auto flex-wrap  justify-content-between gap-2">
            <div className="col-lg-5 agentPostCol">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <figure className="agentPostImage position-relative">
                    <img src={usingImage} alt="" />
                    <NavLink
                      to="/popularDetails"
                      className="rounded-pill border-0 px-3 agentBtn text-decoration-none text-dark agentPostImageNavLink"
                    >
                      View More
                    </NavLink>
                  </figure>
                </div>
                <div className="col-lg-6 col-sm-6 py-2 ps-4 ps-lg-2 lh-1">
                  <p className="fw-bolder">4 bed room duplex /detached house</p>
                  <div className="row">
                    <div className="col-8">
                      <p className="fw-bolder fs-5">₦7,563,345,000</p>
                      <div className="d-flex column-gap-2 newPropertyicondetails">
                        <p className=" fw-bold ">
                          <FontAwesomeIcon
                            icon={faBed}
                            className="me-1 fw-bold"
                          />
                          7
                        </p>
                        <p className=" fw-bold ">
                          <FontAwesomeIcon
                            icon={faBath}
                            className="me-1  fw-bold"
                          />
                          5
                        </p>
                        <p className=" fw-bold ">
                          <FontAwesomeIcon
                            icon={faToilet}
                            className="me-1  fw-bold"
                          />
                          5
                        </p>
                        <p className=" fw-bold">
                          <i class="bi bi-arrows-fullscreen me-1 fw-bolder"></i>
                          500sqm
                        </p>
                      </div>
                      
                      <p className="d-flex flex-nowrap text-truncate fw-bold">Agent: benedict odigel idio kolawole</p>
                      <p className="fw-bolder">
                        <i class="bi bi-geo-alt"></i> Lagos, Nigeria
                      </p>
                      <p className="fw-bold">
                        <i class="bi bi-clock"></i> posted-
                        <span className="text-muted">2 weeks ago</span>
                      </p>
                    </div>
                    <div className="col d-flex align-items-center">
                      <figure className="agentMiniPic agentPostForSaleDetails rounded-circle">
                        <img
                          src={usingImage}
                          alt=""
                          className="rounded-circle"
                        />
                      </figure>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex  rounded-pill justify-content-cente column-gap-2">
                      <p className="rounded-pill px-2 d-flex agentPostForSaleDetails">
                        For Sale
                      </p>
                      <p className="agentPostForSaleDetails px-2 rounded-pill">
                        Available
                      </p>
                      <NavLink className="">
                        <i className="bi bi-whatsapp agentPostForSaleDetails rounded-pill pointerCursorStyle p-1"></i>
                      </NavLink>
                      <NavLink className="">
                        <i className="bi bi-telephone agentPostForSaleDetails rounded-pill pointerCursorStyle p-1 fw-bolder"></i>
                      </NavLink>
                      <NavLink className="">
                        <i className="bi bi-heart agentPostForSaleDetails rounded-pill pointerCursorStyle p-1"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Properties;
