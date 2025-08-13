import React from "react";
import "./ContactUs.css";
import "../index.css";
import handkey from "../agentFiles/agentFileImage/default-estate-agents-for-residential-rental-9.avif";
const ContactAgent = () => {
  return (
    <div className="container-fluid">
      <div
        className="row d-md-flex justify-content-center align-items-center"
        style={{ height: 100 + "vh" }}
      >
        <div className="col-sm-6 contactAgentImage">
          <img src={handkey} alt="" className="img-fluid rounded" />
        </div>
        <div className="col-sm-6">
          <form action="">
            <h2 className="fw-bold">Get in touch with an Agent</h2>
            <div className="formField d-flex flex-wrap">
              <div className="form-group">
                <input type="text" className="fname" placeholder="First name" />
              </div>
              <div className="form-group">
                <input type="text" className="lname" placeholder="Last name" />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="mail"
                  placeholder="Agent email"
                />
              </div>
              <div className="form-group">
                <input type="number" className="phone" placeholder="phone" />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  placeholder="Enter message..."
                ></textarea>
              </div>
            </div>
            <input type="button" value="submit" className="submitButton my-3" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactAgent;
