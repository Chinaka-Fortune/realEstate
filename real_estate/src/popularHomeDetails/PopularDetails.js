import React from "react";

import { useRef, useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";

import shaggi from "../popularHomeDetails/popularVideo/shaggi.mp4";
import whiteMassion from "../../src/home/homeImages/whitemassion.jpg";
import bedRoomBQ from "../../src/home/homeImages/Lovely 5bedroom duplex with 2 rooms BQ,.jpg";
import luxuryHome from "../../src/home/homeImages/Luxury Home.jpg";
import modernHouse from "../../src/home/homeImages/modern house.jpg";

import "../popularHomeDetails/popularHomedetails.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath } from "@fortawesome/free-solid-svg-icons";

const PopularDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [controlPlay, setControlPlay] = useState(
    <i class="bi bi-play fw-bolder fs-4"></i>
  );
  const sliderItems = useRef([]);
  const thumbnailItems = useRef([]);

  useEffect(() => {
    sliderItems.current = Array.from(
      document.querySelectorAll(".list .itemCoral")
    );
    thumbnailItems.current = Array.from(
      document.querySelectorAll(".thumbnailImages .itemCoral")
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

  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setControlPlay(<i class="bi bi-pause-fill"></i>);
      } else {
        videoRef.current.pause();
        setControlPlay(<i class="bi bi-play fw-bolder fs-4"></i>);
      }
    }
  };

  return (
    <div className="slider position-relative">
      <div className="list">
        <div className="item active itemCoral" ref={sliderItems}>
          <img src={whiteMassion} alt="" />
          <div className="content p-3 rounded lh-1">
            <p className="fw-bolder">White massion </p>
            <h2>₦167,000,000</h2>
            <p className="fw-bolder">
              <i class="bi bi-geo-alt-fill me-1"></i>
              45, kunle street, Governor Road, Ikotun, Lagos
            </p>
            <div className="d-flex column-gap-3">
              <p className="fs-6 fw-bold">
                <FontAwesomeIcon icon={faBed} className="me-2 fs-6 fw-bold" />7
              </p>
              <p className="fs-6 fw-bold">
                <FontAwesomeIcon icon={faBath} className="me-2 fs-6 fw-bold" />7
              </p>
              <p className="fs-6 fw-bold"><i class="bi bi-arrows-fullscreen me-2 fs-6 fw-bolder"></i>500sq</p>
            </div>
            <p className="fw-bolder">
              <i class="bi bi-person-vcard me-1"></i> Agent: Anointing
            </p>
            <div>
              <button className="btn px-2 py-2 fw-bolder text-white contentBtnPopular fw-bolder rounded-pill">
                click to message here <i class="bi bi-arrow-right-circle"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="item itemCoral" ref={sliderItems}>
          <img src={luxuryHome} alt="" />
          <div className="content">
            <h2>Back View</h2>
          </div>
        </div>
        <div className="item itemCoral" ref={sliderItems}>
          <img src={modernHouse} alt="" />
          <div className="content">
            <h2>side</h2>
          </div>
        </div>
        <div className="item itemCoral" ref={sliderItems}>
          <img src={bedRoomBQ} alt="" />
          <div className="content">
            <h2>Side</h2>
          </div>
        </div>
        <div className=" itemCoral" ref={sliderItems}>
          <video className="videoDiv" ref={videoRef}>
            <source src={shaggi} type="video/mp4" />
            <source src={shaggi} type="video/ogg" />
            Your browser does not support HTML video.
          </video>
          <button
            className="play-button fw-bolder rounded-pill "
            onClick={handlePlayVideo}
          >
            {controlPlay}
          </button>
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
        <div className="item active itemCoral" ref={thumbnailItems}>
          <img src={whiteMassion} alt="" />
          <div className="content fw-bolder fs-4 text-white">front</div>
        </div>
        <div className="item itemCoral" ref={thumbnailItems}>
          <img src={luxuryHome} alt="" />
          <div className="content fw-bolder fs-4 text-white">back</div>
        </div>
        <div className="item itemCoral" ref={thumbnailItems}>
          <img src={modernHouse} alt="" />
          <div className="content fw-bolder fs-4 text-white">side 1</div>
        </div>
        <div className="item itemCoral" ref={thumbnailItems}>
          {" "}
          <img src={bedRoomBQ} alt="" />
          <div className="content fw-bolder fs-4 text-white">side 2</div>
        </div>
        <div className=" itemCoral" ref={thumbnailItems}>
          <video className=" videoDiv1" width="100%" height="100%">
            <source src={shaggi} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
    </div>
  );
};

export default PopularDetails;
