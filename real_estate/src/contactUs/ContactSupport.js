import React from "react";
import "./ContactUs.css";
import "../index.css";
import { NavLink } from "react-router-dom";

const ContactSupport = () => {
  return (
    <div className="container-fluid">
      <div className="row px-sm-5 px-3 mt-5 contactRow d-flex align-items-center " style={{height:90 + 'vh'}}>
        <div className="col-sm-6 contactShadow p-sm-3 mb-5">
          <h3>Get in touch with Support</h3>
          <p className="agent_box rounded-pill ps-4 pe-2 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            totam saepe vel ea eligendi rem laborum.
          </p>
          <p className="agent_box rounded px-3 px-sm-2 py-3">
            <i className="bi bi-geo-alt"></i>26 ikotun idimu Road, opposite
            Domino pizza, colledge Bus stop, Ikotun Lagos
          </p>
          <p className="agent_box rounded-pill ps-2 py-1">
            <i className="bi bi-Email"></i>Service@ziffcode.com.ng
          </p>
          <p className="d-flex column-gap-3">
            <i className="bi bi-telephone-fill agent_box rounded-pill py-1 px-2"></i><NavLink  className='rounded-pill text-decoration-none agent_box px-3'>08032682945</NavLink ><NavLink className='rounded-pill text-decoration-none agent_box px-3'>09121838990</NavLink>
          </p>
    
          <div className="agent_box rounded-pill py-2 px-2 d-flex flex-column justify-content-center align-items-center mb-2">
            <p className="fw-bold">Connect with us:</p>
            <div className="d-flex column-gap-4">
              <i className="bi bi-facebook fw-bolder fs-4 pointerCursorStyle"></i>
              <i className="bi bi-twitter-x fw-bolder fs-4 pointerCursorStyle"></i>
              <i className="bi bi-instagram fw-bolder fs-4 pointerCursorStyle"></i>
              <i className="bi bi-linkedin fw-bolder fs-4 pointerCursorStyle"></i>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <form action="">
            <h3 className="fw-bolder">Send us a message</h3>
            <div className="formField d-flex flex-wrap">
              <div className="form-group">
                <input type="text" className="fname" placeholder="First name" />
              </div>
              <div className="form-group">
                <input type="text" className="lname" placeholder="Last name" />
              </div>
              <div className="form-group">
                <input type="email" className="mail" placeholder="enter email" />
              </div>
              <div className="form-group">
                <input type="number" className="phone" placeholder="phone" />
              </div>
              <div className="form-group">
                <textarea name="" id="" placeholder="Enter message..."></textarea>
              </div>
            </div>
            <input type="button" value="submit" className="submitButton my-3" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
