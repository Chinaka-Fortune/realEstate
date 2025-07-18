import React from "react";

import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import shaggi from "../popularHomeDetails/popularVideo/shaggi.mp4";
import whiteMassion from "../../src/home/homeImages/whitemassion.jpg";
import bedRoomBQ from "../../src/home/homeImages/Lovely 5bedroom duplex with 2 rooms BQ,.jpg";
import luxuryHome from "../../src/home/homeImages/Luxury Home.jpg";
import modernHouse from "../../src/home/homeImages/modern house.jpg";
import bedRoomBeast from "../../src/home/homeImages/The _Beast_ 5-Bedroom Detached Duplex_.jpg";

import "../popularHomeDetails/popularHomedetails.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBed, faBath } from "@fortawesome/free-solid-svg-icons";

const PopularDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderItems = useRef([]);
  const thumbnailItems = useRef([]);

  useEffect(() => {
    sliderItems.current = Array.from(document.querySelectorAll(".list .item"));
    thumbnailItems.current = Array.from(
      document.querySelectorAll(".thumbnailImages .item")
    );
    updateActiveClass();
  }, [currentIndex]);

  const updateActiveClass = () => {
    sliderItems.current.forEach((item, index) => {
      item.classList.toggle("active", index === currentIndex);
    });
    thumbnailItems.current.forEach((item, index) => {
      item.classList.toggle("active", index === currentIndex);
    });
  };

  const handleNextBtn = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % sliderItems.current.length
    );
  };

  const handlePrevBtn = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + sliderItems.current.length) %
        sliderItems.current.length
    );
  };

  return (
    <div className="slider position-relative">
      <div className="list">
        <div className="item active " ref={sliderItems}>
          <img src={whiteMassion} alt="" />
          <div className="content p-3 rounded lh-1">
            <p className="fw-bolder">White massion </p>
            <h2>₦167,000,000</h2>
            <p className="fw-bolder">
              <i class="bi bi-geo-alt-fill me-1"></i>
              45, kunle street, Governor Road, Ikotun, Lagos
            </p>
            <div className="d-flex">
              <p className="fs-5 fw-bold">
                <FontAwesomeIcon icon={faBed} className="me-2 fs-5 fw-bold" />7
              </p>
              <p className="fs-5 fw-bold">
                <FontAwesomeIcon icon={faBath} className="me-2 fs-5 fw-bold" />7
              </p>
            </div>
            <p className="fw-bolder">
              <i class="bi bi-person-vcard me-1"></i> Agent: Anointing
            </p>
            <div className=" d-flex column-gap-3 mb">
              <NavLink>
                <i class="bi bi-whatsapp  navLinkIconPopular fw-bolder fs-5"></i>
              </NavLink>
              <NavLink>
                <i class="bi bi-instagram  navLinkIconPopular fw-bolder fs-5"></i>
              </NavLink>
              <NavLink>
                <i class="bi bi-facebook  navLinkIconPopular fw-bolder fs-5"></i>
              </NavLink>
              <NavLink>
                <i class="bi bi-linkedin  navLinkIconPopular fw-bolder fs-5"></i>
              </NavLink>
              <NavLink>
                <i class="bi bi-twitter-x  navLinkIconPopular fw-bolder fs-5"></i>
              </NavLink>
            </div>
            
            <div>
              <button className="btn px-2 py-2 fw-bolder text-white contentBtnPopular fw-bolder rounded-pill">
                click to message here <i class="bi bi-arrow-right-circle"></i>
              </button>
            </div>
            {/* <video controls className="videoDiv">
            <source src={shaggi} type="video/mp4" />
            <source src={shaggi} type="video/ogg" />
            Your browser does not support HTML video.
          </video> */}
          </div>
        </div>
        <div className="item" ref={sliderItems}>
          <img src={bedRoomBeast} alt="" />
          <div className="content">
            <p>design</p>
            <h2>₦50,000,000</h2>
            <p>
              lorenm ipsum test dkjskjd keje jhsswfd e nmd mndfksl iire sjjajg
              srjj jy eywuw k;dd.wsdkjs jrksh kjwjjew kekwl;se n{" "}
            </p>
          </div>
        </div>
        <div className="item" ref={sliderItems}>
          <img src={modernHouse} alt="" />
          <div className="content">
            <p>design</p>
            <h2>slider 3</h2>
            <p>
              lorenm ipsum test dkjskjd keje jhsswfd e nmd mndfksl iire sjjajg
              srjj jy eywuw k;dd.wsdkjs jrksh kjwjjew kekwl;se n{" "}
            </p>
          </div>
        </div>
        <div className="item" ref={sliderItems}>
          <img src={bedRoomBQ} alt="" />
          <div className="content">
            <p>design</p>
            <h2>slider 4</h2>
            <p>
              lorenm ipsum test dkjskjd keje jhsswfd e nmd mndfksl iire sjjajg
              srjj jy eywuw k;dd.wsdkjs jrksh kjwjjew kekwl;se n{" "}
            </p>
          </div>
        </div>
        <div className="item" ref={sliderItems}>
          <img src={luxuryHome} alt="" />
          <div className="content">
            <p>design</p>
            <h2>slider 5</h2>
            <p>
              lorenm ipsum test dkjskjd keje jhsswfd e nmd mndfksl iire sjjajg
              srjj jy eywuw k;dd.wsdkjs jrksh kjwjjew kekwl;se n{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="arrowBtn d-flex column-gap-4">
        <button
          id="prev"
          className="rounded-pill fw-bold btn-primary px-3 py-2 border-0"
          onClick={handlePrevBtn}
        >
          prev
        </button>
        <button
          id="next"
          className="rounded-pill fw-bold btn-primary px-3 py-2 border-0"
          onClick={handleNextBtn}
        >
          next
        </button>
      </div>

      <div className="thumbnailImages">
        <div className="item active" ref={thumbnailItems}>
          <img src={whiteMassion} alt="" />
          <div className="content fw-bolder fs-4 text-white">front</div>
        </div>
        <div className="item" ref={thumbnailItems}>
          <img src={bedRoomBeast} alt="" />
          <div className="content fw-bolder fs-4 text-white">back</div>
        </div>
        <div className="item" ref={thumbnailItems}>
          <img src={modernHouse} alt="" />
          <div className="content fw-bolder fs-4 text-white">side 1</div>
        </div>
        <div className="item" ref={thumbnailItems}>
          {" "}
          <img src={bedRoomBQ} alt="" />
          <div className="content fw-bolder fs-4 text-white">side 2</div>
        </div>
        <div className="item" ref={thumbnailItems}>
          <img src={luxuryHome} alt="" />
          <div className="content"></div>
        </div>
      </div>
    </div>
  );
};

export default PopularDetails;
