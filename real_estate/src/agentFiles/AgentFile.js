import React from "react";
import { Link } from "react-router-dom";
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

      <div className="Agentcontainer container mt-3">
        <div className="row">
        <div className="col-2 colDiv position-relative rounded-3">
          <figure className="figureDiv rounded position-relative ">
            <img src={defaultEstate} alt="" className="rounded"/>
          </figure>
          <figcaption className="position-absolute  fig-caption">
            <h5> <i class="bi bi-person"></i> idio Benedict </h5>
            <h6><i class="bi bi-geo-alt"></i> Lagos, Nigeria</h6>
            <div className="icons d-flex flex-colum align-items-center justify-content-around w-75 mx-auto my-3">
              <Link><i className="bi bi-facebook fw-bolder fs-6 border border-2 rounded-circle p-1"></i></Link>
              <Link><i className="bi bi-instagram fw-bolder fs-6 border border-2 rounded-circle p-1"></i></Link>
              <Link><i className="bi bi-whatsapp fw-bolder fs-6 border border-2 rounded-circle p-1"></i></Link>
              <Link><i className="bi bi-twitter-x fw-bolder fs-6 border border-2 rounded-circle p-1"></i></Link> 
            </div>
            <button type="button" className="rounded-pill border-0 px- py-1 px-3 ms-1 fw-bold btn-muted btn btn-sm btn-primary mx-auto">posted {7} properties</button>
          </figcaption>
        </div>
         
        </div>
      </div>
    </>
  );
};

export default AgentFile;
