import React from 'react'
import "../Home.css"
import "../../index.css"
import { NavLink } from "react-router-dom";
const ReachOut = () => {
return (
    <div className='container my-4'>
      <div className="row d-flex  justify-content-center gap-2 gap-md-4">
        <NavLink className="col-md-2 col-5 py-4 py-md-5 text-center fw-bold rounded shadow newPropertiesDiv d-flex flex-column  text-decoration-none reachOutHover" >
         <i class="bi bi-buildings  fs-2"></i>
          <span>New Properties</span></NavLink>
        <NavLink className="col-md-2 col-5 py-4 py-md-5 text-center fw-bold rounded shadow  d-flex flex-column text-decoration-none reachOutHover">
          <i class="bi bi-person-lines-fill fs-2"></i>
          <span>Contact Agent</span></NavLink>
        <NavLink className="col-md-2 col-5 py-4 py-md-5 text-center fw-bold rounded shadow d-flex flex-column text-decoration-none reachOutHover"><i class="bi bi-houses-fill fs-2"></i><span>Building for Sale</span></NavLink>
        <NavLink className="col-md-2 col-5 py-4 py-md-5 text-center fw-bold rounded shadow d-flex flex-column text-decoration-none reachOutHover">
          <i class="bi bi-building fs-2"></i><span>House for Sale</span></NavLink>
      </div>
    </div>
  )
}

export default ReachOut
