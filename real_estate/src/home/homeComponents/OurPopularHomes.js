import React from "react";
import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import OurPopularHomeComp from "./OurPopularHomeComp";

import BedRoomDetach from "../homeImages/5 bedroom detached duplex for sale lekki lagos.jpg";
import whiteMassion from "../homeImages/whitemassion.jpg"
import bedRoomBQ from "../homeImages/Lovely 5bedroom duplex with 2 rooms BQ,.jpg"
import luxuryHome from "../homeImages/Luxury Home.jpg"
import modernHouse from "../homeImages/modern house.jpg"
import bedRoomBeast from "../homeImages/The _Beast_ 5-Bedroom Detached Duplex_.jpg"
import "../Home.css";

const OurPopularHomes = () => {
  const [degrees, setDegrees] = useState(0)
  const RotatingBoxRef = useRef(null)


  const handleprevClick = () =>{
    setDegrees((prevDegrees)=> prevDegrees + 60)
    RotatingBoxRef.current.style =`transform: perspective(1000px) rotateY(${degrees + 60}deg) ; `
  }
  const handleNextClick = () =>{
    setDegrees((nextDegrees)=> nextDegrees - 60)
    RotatingBoxRef.current.style =`transform: perspective(1000px) rotateY(${degrees - 60}deg); `
  }

  return (
    <div className="container-fluid  ourComponentContainerDivColor position-relative">
      <div className="row d-flex justify-content-center align-items-center ">
        <h2 className="text-white text-center mb-4 fw-bolder pt-3">POPULAR PROPERTIES</h2>
        <div  className=" ourComponentImgDiv d-flex justify-content-center align-items-center" ref={RotatingBoxRef} >
          
          <span className="" style={{ "--i": 1 }}>
            <img
              src={BedRoomDetach}
              alt="5 bedroom detached duplex for sale lekki lagos"
            />
            <button
              type="button"
              className="btn rounded-5 ourComponentImgDivBtn "
            >
              Details <i bi bi-arrow></i>
            </button>
          </span>
          <span className="  position-relativ" style={{ "--i": 2 }}>
            <img
              src={bedRoomBeast}
              alt="5 bedroom detached duplex for sale lekki lagos"
            />
            <button
              type="button"
              className="btn rounded-5 ourComponentImgDivBtn "
            >
              Details <i bi bi-arrow></i>
            </button>
          </span>
          <span className=" position-relativ" style={{ "--i": 3 }}>
            <img
              src={modernHouse}
              alt="5 bedroom detached duplex for sale lekki lagos"
            />
            <button
              type="button"
              className="btn rounded-5 ourComponentImgDivBtn "
            >
              Details <i bi bi-arrow></i>
            </button>
          </span>
          <span className=" position-relativ" style={{ "--i": 4 }}>
            <img
              src={luxuryHome}
              alt="5 bedroom detached duplex for sale lekki lagos"
            />
            <button
              type="button"
              className="btn rounded-5 ourComponentImgDivBtn "
            >
              Details <i bi bi-arrow></i>
            </button>
          </span>
          <span className=" position-relativ" style={{ "--i": 5 }}>
            <img
              src={bedRoomBQ}
              alt="5 bedroom detached duplex for sale lekki lagos"
            />
            <button
              type="button"
              className="btn rounded-5 ourComponentImgDivBtn "
            >
              Details <i bi bi-arrow></i>
            </button>
          </span>
          <span className=" position-relativ" style={{ "--i": 6 }}>
            <img
              src={whiteMassion}
              alt="5 bedroom detached duplex for sale lekki lagos"
            />
            <button
              type="button"
              className="btn rounded-5 ourComponentImgDivBtn "
            >
              Details <i bi bi-arrow></i>
            </button>
          </span>
        </div>
      <div className="d-flex justify-content-center column-gap-5"> 
          <button className="btn popularPrevBtn btn-primary rounded-pill px-4 border-0" onClick={handleprevClick} >Back</button>

          <button className="btn popularNextBtn btn-primary rounded-5 rounded-pill px-4 border-0" onClick={handleNextClick} >Next</button>
          </div>
      </div>
    </div>
  );
};

export default OurPopularHomes;
