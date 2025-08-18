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
            <img src={usingImage} alt="" />
            <NavLink
              to="/popularDetails"
              role="button"
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
            <NavLink
              to=""
              className="d-flex flex-nowrap text-truncate fw-bold AgentNameAndPic text-decoration-none"
            >
              Agent: benedict odigel idio kolawole
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
