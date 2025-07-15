import React from 'react';
import { NavLink } from 'react-router-dom';
import image1 from "../homeImages/images (1).jpeg"
import image2 from "../homeImages/images.jpeg"
import image3 from "../homeImages/download (2).jpeg"
import image4 from "../homeImages/download.jpeg"
const Agent = () => {
  return (
    <div className='container py-3'>
        <h2 className='text-center fw-bolder mb-4'>Our Top Agents</h2>
      <div className="row gap-4 d-flex justify-content-center">
        <NavLink className="col-md-4 col-9 col-lg-2 border border-0  d-flex justify-content-center flex-column align-items-center rounded agent_box position-relative">
           <img src={image1} alt=""  className=''/>
            <h6 className='fw-bolder fs-5 text-white rounded'>Mr Fortune</h6>
        </NavLink>
        <NavLink className="col-md-4 col-9 col-lg-2 border border-0  d-flex justify-content-center flex-column align-items-center rounded agent_box position-relative">
           <img src={image2} alt=""  className=''/>
            <h6 className='fw-bolder fs-5 text-white rounded'>Mr Benedict</h6>
        </NavLink>
        <NavLink className="col-md-4 col-9 col-lg-2 border border-0  d-flex justify-content-center flex-column align-items-center rounded agent_box position-relative">
           <img src={image3} alt=""  className=''/>
            <h6 className='fw-bolder fs-5 text-white rounded'>Mr Favour</h6>
        </NavLink>
        <NavLink className="col-md-4 col-9 col-lg-2 border border-0  d-flex justify-content-center flex-column align-items-center rounded agent_box position-relative">
           <img src={image4} alt=""  className=''/>
            <h6 className='fw-bolder fs-5 text-white rounded'>Mrs Olarenwaju</h6>
        </NavLink>

        
      </div>
    </div>
  )
}

export default Agent
