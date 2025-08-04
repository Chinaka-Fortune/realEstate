import React from "react";
import "./ContactUs.css";
import "../index.css";
import { NavLink } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="container-fluid">
      <div className="row px-5 contactRow d-flex align-items-center">
        <div className="col-6 contactShadow p-3">
          <h3>Let's get in touch</h3>
          <p className="agent_box rounded-pill ps-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            totam saepe vel ea eligendi rem laborum.
          </p>
          <p className="agent_box rounded px-2">
            <i className="bi bi-geo-alt"></i>26 ikotun idimu Road, opposite
            Domino pizza, colledge Bus stop, Ikotun Lagos
          </p>
          <p className="agent_box rounded-pill ps-2">
            <i className="bi bi-Email"></i>Service@ziffcode.com.ng
          </p>
          <p className="d-flex column-gap-3">
            <i className="bi bi-telephone-fill agent_box rounded-pill py-1 px-2"></i><NavLink  className='rounded-pill text-decoration-none agent_box px-3'>08032682945</NavLink ><NavLink className='rounded-pill text-decoration-none agent_box px-3'>09121838990</NavLink>
          </p>
    
          <div className="agent_box rounded-pill py-3 ps-3">
            <p>Connect with us:</p>
            <div className="d-flex column-gap-4">
              <i className="bi bi-facebook fw-bolder fs-5 pointerCursorStyle"></i>
              <i className="bi bi-twitter-x fw-bolder fs-5 pointerCursorStyle"></i>
              <i className="bi bi-instagram fw-bolder fs-5 pointerCursorStyle"></i>
              <i className="bi bi-linkedin fw-bolder fs-5 pointerCursorStyle"></i>
            </div>
          </div>
        </div>
        <div className="col-6">
          <form action="">
            <h3 className="">Send us a message</h3>
            <div className="formField d-flex flex-wrap">
              <div className="form-group">
                <input type="text" className="fname" placeholder="First name" />
              </div>
              <div className="form-group">
                <input type="text" className="lname" placeholder="Last name" />
              </div>
              <div className="form-group">
                <input type="email" className="mail" placeholder="First name" />
              </div>
              <div className="form-group">
                <input type="number" className="phone" placeholder="phone" />
              </div>
              <div className="form-group">
                <textarea name="" id=""></textarea>
              </div>
            </div>
            <input type="button" value="submit" className="submitButton" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
