import React from "react";
import { NavLink } from "react-router-dom";
import "./agentFile.css";
import "../index.css";
import defaultEstate from "./agentFileImage/default-estate-agents-for-residential-rental-9.avif";

import blackGuy from "./agentFileImage/images.jpg";
const AgentFile = () => {
  return (
    <>
      <div className="searchAgents py-5 bg-white">
        <div className="searchConAgent mt-4 d-flex align-items-center justify">
          <input type="text" placeholder="search agent" />
        </div>
        <button></button>
      </div>

      <div className="Agentcontainer mt-5 d-flex ">
        <div className="card">
          <div className="imgDiv">
            <img src={defaultEstate} alt="" />
          </div>
          <div className="content">
            <h3> <i class="bi bi-person-circle"></i> benedict <i bi bi-facebook></i></h3>
            <h5><i class="bi bi-geo-alt-fill"></i> Lagos Nigeria</h5>
            <button type="button" className=" rounded-pill px-4 py-1">Posted {16} property(ies)</button>
            <div className="d-flex justify-content-center gap-3">
              <NavLink to='' className="iconNavLink p-2 border border-secondary rounded-circle "><i class="bi bi-facebook fw-bolder"></i></NavLink>
              <NavLink to='' className="iconNavLink p-2 border border-secondary rounded-circle "><i class="bi bi-whatsapp fw-bolder"></i></NavLink>
              <NavLink to='' className="iconNavLink p-2 border border-secondary rounded-circle "><i class="bi bi-twitter-x fw-bolder"></i></NavLink>
              <NavLink to='' className="iconNavLink p-2 border border-secondary rounded-circle "><i class="bi bi-instagram fw-bolder"></i></NavLink>
              <NavLink to='' className="iconNavLink p-2 border border-secondary rounded-circle "><i class="bi bi-linkedin fw-bolder"></i></NavLink>
              <NavLink to='' className="iconNavLink p-2 border border-secondary rounded-circle "><i class="bi bi-telegram fw-bolder"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgDiv">
            <img src={defaultEstate} alt="" />
          </div>
          <div className="content"></div>
        </div>
        <div className="card">
          <div className="imgDiv">
            <img src={defaultEstate} alt="" />
          </div>
          <div className="content">
            <h3>benedict <i bi bi-facebook></i></h3>
            <h5>Lagos Nigeria</h5>
            <div>
              <NavLink to=''><i bi bi-twitter></i></NavLink>
              <NavLink to=''></NavLink>
              <NavLink to=''></NavLink>
              <NavLink to=''></NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentFile;
