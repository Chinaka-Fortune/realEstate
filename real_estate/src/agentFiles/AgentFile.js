import React from "react";
import { NavLink } from "react-router-dom";
import "./agentFile.css";
import "../index.css";
import defaultEstate from "./agentFileImage/default-estate-agents-for-residential-rental-9.avif";

import blackGuy from "./agentFileImage/images.jpg";
const AgentFile = () => {
  return (
    <>
      <div className=" container-fluid container-top">
        <div className="row d-flex justify-content-center">
          
            <div className="searchConAgent mb-4 d-flex align-items-center justify-content-end pt-3 pe-5 column-gap-2 column-gap-md-3">
              <input
                type="text"
                placeholder="search agent"
                className="rounded-pill border-0 px-3 py-2"
              />
              <button className="rounded-pill border-0 px-3 py-2 btn"><i className="bi bi-search"></i></button>
            </div>
            

          <div className="Agentcontainer d-flex flex-wrap">
            <div className="col-12 col-lg-2 col-md-4 colDiv position-relative rounded-3">
              <figure className="figureDiv rounded position-relative ">
                <img src={defaultEstate} alt="" className="rounded" />
                <h4 className="agentBtn fw-bolder">Benedict</h4>
              </figure>
              <figcaption className="position-absolute  fig-caption">
                <h5 className="rounded-pill">Idio Benedict</h5>
                <h6>
                  <i class="bi bi-geo-alt"></i> Lagos, Nigeria
                </h6>
                <div className="icons d-flex flex-colum align-items-center justify-content-around w-75 mx-auto my-3">
                  <NavLink className="navlinks">
                    <i className="bi bi-facebook fw-bolder"></i>
                  </NavLink>
                  <NavLink className="navlinks">
                    <i className="bi bi-instagram fw-bolder"></i>
                  </NavLink>
                  <NavLink className="navlinks">
                    <i className="bi bi-whatsapp fw-bolder"></i>
                  </NavLink>
                  <NavLink className="navlinks">
                    <i className="bi bi-twitter-x fw-bolder"></i>
                  </NavLink>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    type="button"
                    className="rounded-pill border-0 px- py-1 px-3  fw-bold btn-muted btn btn-sm agentBtn mx-auto"
                  >
                    posted {7} properties
                  </button>
                </div>
              </figcaption>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentFile;
