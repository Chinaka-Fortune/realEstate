import React from 'react';
import { NavLink } from 'react-router-dom';
import image1 from "../homeImages/images (1).jpeg"
import image2 from "../homeImages/images.jpeg"
import image3 from "../homeImages/download (2).jpeg"
import image4 from "../homeImages/download.jpeg"
const Agent = () => {
  return (
    <div className='container py-3'>
        <div  className='d-flex justify-content-center align-items-center mb-4 column-gap-5'>
            <h2 className=' fw-bolder'>OUR TOP AGENTS</h2>
            <button type="button" className='btn px-3 py-2 rounded-pill agentBtn text-dark fw-bolder'>View More Agents </button>
        </div>
      <div className="row gap-4 d-flex justify-content-center">
        <NavLink className="col-md-4 col-9 col-lg-2 border border-0  d-flex justify-content-center flex-column align-items-center rounded agent_box position-relative">
           <img src={image1} alt=""  className=''/>
            <h6 className='fw-bolder fs-5 text-dark rounded'>Mr Fortune</h6>
        </NavLink>
        <NavLink className="col-md-4 col-9 col-lg-2 border border-0  d-flex justify-content-center flex-column align-items-center rounded agent_box position-relative">
           <img src={image2} alt=""  className=''/>
            <h6 className='fw-bolder fs-5 text-dark rounded'>Mr Benedict</h6>
        </NavLink>
        <NavLink className="col-md-4 col-9 col-lg-2 border border-0  d-flex justify-content-center flex-column align-items-center rounded agent_box position-relative">
           <img src={image3} alt=""  className=''/>
            <h6 className='fw-bolder fs-5 text-dark rounded'>Mr Favour</h6>
        </NavLink>
        <NavLink className="col-md-4 col-9 col-lg-2 border border-0  d-flex justify-content-center flex-column align-items-center rounded agent_box position-relative">
           <img src={image4} alt=""  className=''/>
            <h6 className='fw-bolder fs-5 text-dark rounded'>Mrs Olarenwaju</h6>
        </NavLink>

        
      </div>
    </div>
  )
}

export default Agent
