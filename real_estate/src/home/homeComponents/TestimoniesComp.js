import React from 'react'
import "../Home.css"
const TestimoniesComp = ({testimonyName, testimonyJob, testimonyText, testimonyPix}) => {
  return (
    <div className='container_box rounded'>
      <div className="card p-3 border-0">
        <div className="card-text"><em className='text-muted'>{testimonyText}</em></div>
        <div className="card-details d-flex mt-3">
          <img src={testimonyPix} alt="" className='rounded-circle'/>
          <div className="discription">
            <div className="name fw-bold">{testimonyName}</div>
            <div className="job text-muted">{testimonyJob}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimoniesComp
