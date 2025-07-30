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

      <div className="Agentcontainer mt-5 d-flex gap-4">
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
