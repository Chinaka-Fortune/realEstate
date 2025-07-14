import React from 'react'
import "../Home.css"
import "../../index.css"
const ReachOut = () => {

  
  return (
    <div className='container my-4'>
      <div className="row d-flex  justify-content-center gap-2 gap-md-4">
        <div className="col-md-2 col-5 py-4 py-md-5 text-center fw-bold rounded shadow newPropertiesDiv d-flex flex-column" >
         <i class="bi bi-buildings  fs-2"></i>
          <span>New Properties</span></div>
        <div className="col-md-2 col-5 py-4 py-md-5 text-center fw-bold rounded shadow  d-flex flex-column">
          <i class="bi bi-person-lines-fill fs-2"></i>
          <span>Contact Agent</span></div>
        <div className="col-md-2 col-5 py-4 py-md-5 text-center fw-bold rounded shadow d-flex flex-column"><i class="bi bi-houses-fill fs-2"></i><span>Building for Sale</span></div>
        <div className="col-md-2 col-5 py-4 py-md-5 text-center fw-bold rounded shadow d-flex flex-column">
          <i class="bi bi-building fs-2"></i><span>House for Sale</span></div>
      </div>
    </div>
  )
}

export default ReachOut
