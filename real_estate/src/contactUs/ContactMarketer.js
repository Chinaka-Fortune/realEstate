import React from "react";
import "./ContactUs.css";
import "../index.css";
import marketerImage from "../agentFiles/agentFileImage/customercare.png";


const ContactMarketer = () => {
  return (
    <div className='container-fluid'>
      <div
              className="row d-md-flex justify-content-center align-items-center"
              style={{ height: 100 + "vh" }}
            >
              <div className="col-sm-6 contactAgentImage">
                <img src={marketerImage} alt="" className="img-fluid rounded" />
              </div>
              <div className="col-sm-6">
                <form action="">
                  <h2 className="fw-bold">You need your properties go viral? <br /> Look no further, just send us a message and our marketers will take it up.</h2>
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
                        placeholder="E-mail"
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
  )
}

export default ContactMarketer
