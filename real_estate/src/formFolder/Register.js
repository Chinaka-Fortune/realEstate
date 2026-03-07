import React from "react";
import { useState } from "react";
import { href, NavLink } from "react-router-dom";
import "./Form.css";
import "../index.css";

const Register = () => {
  const [registerAgentFullName, setRegisterAgentFullName] = useState("");
  const [registerAgentPassword, setRegisterAgentPassword] = useState("");
  const [registerAgentCity, setRegisterAgentCity] = useState("");
  const [registerAgentEmail, setRegisterAgentEmail] = useState("");
  const [registerAgentNationality, setRegisterAgentNationality] = useState("");
  const [registerAgentState, setRegisterAgentState] = useState("");
  const [registerAgentLocalGov, setRegisterAgentLocalGov] = useState("");
  const [registerAgentDateOfBirth, setRegisterAgentDateOfBirth] = useState("");
  const [registerAgentPhoneNumber, setRegisterAgentPhoneNumber] = useState("");
  const [registerAgentAddress, setRegisterAgentAddress] = useState("");
  const [registerAgentFile, setRegisterAgentFile] = useState("");

  const handleRegisterAgentFullName = (e) => {
    setRegisterAgentFullName(e.preventDefault());
  };
  const handleRegisterAgentphoneNumber = (e) => {
    setRegisterAgentPhoneNumber(e.preventDefault());
  };
  const handleRegisterAgentPassword = (e) => {
    setRegisterAgentPassword(e.preventDefault());
  };
  const handleRegisterAgentDateOfBirth = (e) => {
    setRegisterAgentDateOfBirth(e.preventDefault());
  };
  const handleRegisterAgentLocalGov = (e) => {
    setRegisterAgentLocalGov(e.preventDefault());
  };
  const handleRegisterAgentNationality = (e) => {
    setRegisterAgentNationality(e.preventDefault());
  };
  const handleRegisterAgentState = (e) => {
    setRegisterAgentState(e.preventDefault());
  };
  const handleRegisterAgentCity = (e) => {
    setRegisterAgentCity(e.preventDefault());
  };
  const handleRegisterAgentEmail = (e) => {
    setRegisterAgentEmail(e.preventDefault());
  };
  const handleRegisterAgentAddress = (e) => {
    setRegisterAgentAddress(e.preventDefault());
  };
  const handleRegisterAgentFile = (e) => {
    setRegisterAgentFile(e.preventDefault());
  };

  return (
    <div className="main-container px-2 container-fluid">
      <div className="row form registerScreen mx-auto d-flex justify-content-center row-gap-3 mb-3">
        <div className="mt-5 mt-sm-0 pt-3 pt-sm-0">
          <p className="fs-2 fw-bolder">Register as an Agent</p>
        </div>
        <div className="col-md-5 register">
          <input
            type="text"
            className=" w-100 px-3 border-0 py-2 py-sm-3 rounded-4 fw-bolder"
            placeholder="Full Name"
            value={registerAgentFullName}
            onChange={handleRegisterAgentFullName}
          />
        </div>

        <div className="col-md-5 position-relative regInputDiv">
          <input
            type="email"
            className=" w-100 ps-3 pe-5 border-0 py-2 py-sm-3 rounded-4 fw-bolder"
            placeholder="E-mail"
            value={registerAgentEmail}
            onChange={handleRegisterAgentEmail}
          />
          <i className="bi bi-envelope position-absolute fw-bolder"></i>
        </div>

        <div className="col-md-5 register">
          <input
            type="text"
            className=" w-100 ps-3 border-0 py-2 py-sm-3 rounded-4 fw-bolder"
            placeholder="Nationality"
            value={registerAgentNationality}
            onChange={handleRegisterAgentNationality}
          />
        </div>
        <div className="col-md-5 register">
          <input
            type="text"
            className=" w-100 ps-3 border-0 py-2 py-sm-3 rounded-4 fw-bolder"
            placeholder="State"
            value={registerAgentState}
            onChange={handleRegisterAgentState}
          />
        </div>
        <div className="col-md-5 register">
          <input
            type="text"
            className=" w-100 px-3  border-0 py-2 py-sm-3 rounded-4 fw-bolder"
            placeholder="Local Govt"
            value={registerAgentLocalGov}
            onChange={handleRegisterAgentLocalGov}
          />
        </div>
        <div className="col-md-5 register">
          <input
            type="text"
            className=" w-100 px-3 border-0 py-2 py-sm-3 rounded-4 fw-bolder"
            placeholder="City"
            value={registerAgentCity}
            onChange={handleRegisterAgentCity}
          />
        </div>
        <div className="col-md-5 dateOfBirthCol d-flex justify-content-between align-items-center">
          <span className="fw-bold">D.O.B:</span>
          <input
            type="date"
            className="px-3 border-0 py-2 py-sm-3 rounded-4 fw-bolder"
            placeholder="Date of Birth"
            value={registerAgentDateOfBirth}
            onChange={handleRegisterAgentDateOfBirth}
          />
        </div>
        <div className="col-md-5 position-relative regInputDiv">
          <input
            type="tel"
            className=" w-100 ps-3 pe-5 border-0 py-2 py-sm-3 rounded-4 fw-bolder"
            placeholder="Phone Number"
            value={registerAgentPhoneNumber}
            onChange={handleRegisterAgentphoneNumber}
          />
          <i className="bi bi-phone position-absolute fw-bolder"></i>
        </div>

        <div className="col-md-5 register">
          <div className="position-relative regInputDiv">
            <input
              type="password"
              className=" w-100 ps-3 pe-5 border-0 py-2 py-sm-3 rounded-4 fw-bolder"
              placeholder=" Password"
              aria-describedby="passwordHelpBlock"
              value={registerAgentPassword}
              onChange={handleRegisterAgentPassword}
            />
            <i className="bi bi-lock-fill position-absolute"></i>
          </div>
          <div id="passwordHelpBlock" className="form-text text-white fw-bold">
            Your password must be 8-20 characters long
          </div>
        </div>

        <div className="col-md-5 register">
          <div className="position-relative regInputDiv">
            <input
              type="file"
              className=" w-100 ps-3 pe-5 border-0 py-2 py-sm-3 rounded-4 fw-bolder"
              aria-describedby="meansOfVerificationHelpBlock"
              value={registerAgentFile}
              onChange={handleRegisterAgentFile}
            />
            <i className="bi bi-lock-fill position-absolute"></i>
          </div>
          <div
            id="meansOfVerificationHelpBlock"
            className="form-text fw-bolder text-white"
          >
            Your means of verifications, either (NIN,Passport, Driver's license
            etc)
          </div>
        </div>

        <div className="col-md-10">
          <textarea
            placeholder="Enter Address..."
            rows="3"
            className="w-100 rounded-3 ps-2 pe-3 agentTextArea"
            value={registerAgentAddress}
            onChange={handleRegisterAgentAddress}
          ></textarea>
        </div>
        <div className="col-md-10"><input
          type="submit"
          value="Submit"
          className="rounded-4 w-100  py-2 fw-bolder border-0 agentRegisterSubmitBtn"
        /></div>

        <div className="col-md-10">
          <p>
            You already have an account?{" "}
            <NavLink to='/login' className="fw-bolder text-info">Login</NavLink>
          </p>
        </div>

        <div class="form-check form-switch col-md-10">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
          />
          <label class="form-check-label" for="switchCheckDefault">
            Agreed to terms and condition
          </label>
        </div>
      </div>
    </div>
  );
};

export default Register;
