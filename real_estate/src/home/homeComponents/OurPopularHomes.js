import React from "react";
import { NavLink } from "react-router-dom";
import OurPopularHomeComp from "./OurPopularHomeComp";

import BedRoomDetach from "../homeImages/5 bedroom detached duplex for sale lekki lagos.jpg";
import "../Home.css";

const OurPopularHomes = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <h2 className="bg-danger text-center mb-4 fw-bolder">PORPULAR PROPERTIES</h2>
        <div className=" ourComponentImgDiv d-flex justify-content-center gap-4">
          <div className="  position-relative" style={{ "--i": 1 }}>
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
          </div>
          <div className="  position-relative" style={{ "--i": 2 }}>
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
          </div>
          <div className=" position-relative" style={{ "--i": 3 }}>
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
          </div>
          <div className=" position-relative" style={{ "--i": 4 }}>
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
          </div>
          <div className=" position-relative" style={{ "--i": 5 }}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPopularHomes;
