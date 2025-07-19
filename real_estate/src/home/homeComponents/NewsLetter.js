import React from "react";
import { useState } from "react";
import darkBuilding from "../homeImages/darkBuilding.jpg";
import "../Home.css";
const NewsLetter = () => {
  
  const [newLetter, setNewsLetter] = useState('');
  const handleNewsLetter = (e)=> setNewsLetter(e.target.value)

  return (
    <div className="container-fluid my-5 NewsLetterContainer">
      <div className="row d-flex align-items-center">
        <div className="col-md-6 newLetterImgDiv">
          <img src={darkBuilding} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6 p-md-5 py-4 ">
          <h3 className="fw-bolder">Subscribe Newsletter</h3>
          <span className="fs-5 ">
            Get started by choosing to subscribe to get updated properties</span>
             <form action="" className="mt-3">
              <input type="text" placeholder="Enter mail" className="w-100 rounded-pill py-2 ps-3 text-dark border-0 NewsLetterInput" value={newLetter} onChange={handleNewsLetter}/>
              <input type="button" value="Submit" className="NewsLetterInputBtn px-4 py-2 rounded-pill border-0 mt-3 fw-bolder"/>
            </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
