import React from "react";
import "../Home.css";
import "../../index.css";
import { NavLink } from "react-router-dom";
const ReachOut = () => {
  return (
    <div className="container my-4">
      <div className="row d-flex  justify-content-center gap-2 gap-md-4">
        <NavLink to ="/newProperties" className="col-md-2 col-5 py-4 py-md-5 text-center fw-bold rounded  d-flex flex-column  text-decoration-none reachOutHover">
          <i class="bi bi-buildings  fs-2 text-dark"></i>
          <span className="text-dark">New Properties</span>
        </NavLink>
        <NavLink to="/agent_file" className="col-md-2 col-5 py-4 py-md-5 text-center fw-bold rounded  d-flex flex-column text-decoration-none reachOutHover">
          <i class="bi bi-person-lines-fill fs-2 text-dark"></i>
          <span className="text-dark">Contact Agent</span>
        </NavLink>
        <NavLink className="col-md-2 col-5 py-4 py-md-5 text-center fw-bold rounded d-flex flex-column text-decoration-none reachOutHover">
          <i class="bi bi-houses-fill fs-2 text-dark"></i>
          <span className="text-dark">Building for Sale</span>
        </NavLink>
        <NavLink className="col-md-2 col-5 py-4 py-md-5 text-center fw-bold rounded d-flex flex-column text-decoration-none reachOutHover">
          <i class="bi bi-building fs-2 text-dark"></i>
          <span className="text-dark">House for Sale</span>
        </NavLink>
      </div>
    </div>
  );
};

export default ReachOut;
