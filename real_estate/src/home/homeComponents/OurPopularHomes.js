import React from "react";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import BedRoomDetach from "../homeImages/5 bedroom detached duplex for sale lekki lagos.jpg";
import whiteMassion from "../homeImages/whitemassion.jpg";
import bedRoomBQ from "../homeImages/Lovely 5bedroom duplex with 2 rooms BQ,.jpg";
import luxuryHome from "../homeImages/Luxury Home.jpg";
import modernHouse from "../homeImages/modern house.jpg";
import bedRoomBeast from "../homeImages/The _Beast_ 5-Bedroom Detached Duplex_.jpg";
import "../Home.css";

const OurPopularHomes = () => {
  const [degrees, setDegrees] = useState(0);
  const RotatingBoxRef = useRef(null);

  const handleprevClick = () => {
    setDegrees((prevDegrees) => prevDegrees + 60);
    RotatingBoxRef.current.style = `transform: perspective(1000px) rotateY(${
      degrees + 60
    }deg) ; `;
  };
  const handleNextClick = () => {
    setDegrees((nextDegrees) => nextDegrees - 60);
    RotatingBoxRef.current.style = `transform: perspective(1000px) rotateY(${
      degrees - 60
    }deg); `;
  };

  return (
    <div
      className="container-fluid
     ourComponentContainermain pt-5 ourComponentContainerDivColor"
    >
     <h2 className="text-dark text-center mb-4 fw-bolder pt-4 pb-3">
        POPULAR PROPERTIES
      </h2>
      <div className="ourComponentContainer d-flex justify-content-center align-items-center ">
        <div className="box position-relative" ref={RotatingBoxRef}>
          <div style={{ "--i": 1 }}>
            <img src={bedRoomBeast} alt=""/>
            <NavLink to = "/popularDetails"
              className=" position-absolute rounded-pill px-2 ourComponentImgDivBtn text-decoration-none"
              role="button"
            >
              details
            </NavLink>
          </div>
          <div style={{ "--i": 2 }}>
            <img src={modernHouse} alt="" />
            <NavLink to = "/popularDetails"
              className=" position-absolute rounded-pill px-2 ourComponentImgDivBtn text-decoration-none"
              role="button"
            >
              details
            </NavLink>
          </div>
          <div style={{ "--i": 3 }}>
            <img src={luxuryHome} alt="" />
            <NavLink to = "/popularDetails"
              className=" position-absolute rounded-pill px-2 ourComponentImgDivBtn text-decoration-none"
              role="button"
            >
              details
            </NavLink>
          </div>
          <div style={{ "--i": 4 }}>
            <img src={bedRoomBQ} alt="" />
            <NavLink to = "/popularDetails"
              className=" position-absolute rounded-pill px-2 ourComponentImgDivBtn text-decoration-none"
              role="button"
            >
              details
            </NavLink>
          </div>
          <div style={{ "--i": 5 }}>
            <img src={whiteMassion} alt="" />
            <NavLink to = "/popularDetails"
              className=" position-absolute rounded-pill px-2 ourComponentImgDivBtn text-decoration-none"
              role="button"
            >
              details
            </NavLink>
          </div>
          <div style={{ "--i": 6 }}>
            <img src={BedRoomDetach} alt="" />
            <NavLink to = "/popularDetails"
              className=" position-absolute rounded-pill px-2 ourComponentImgDivBtn text-decoration-none"
              role="button"
            >
              details
            </NavLink>
          </div>
        </div>
        <div className="popularBtnDiv d-flex gap-5">
          <button
            type="button"
            className="btn btn-primary px-4 rounded-pill"
            onClick={handleprevClick}
          >
            Prev
          </button>
          <button
            type="button"
            className="btn btn-primary px-4 rounded-pill"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
     );
};

export default OurPopularHomes;
