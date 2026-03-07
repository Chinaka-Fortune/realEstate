import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Form.css";
import "../index.css";

const Login = () => {
  const [emailSignIn, setEmailSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");

  const handleEmailSignIn = (e) => setEmailSignIn(e.preventDefault());
  const handlePasswordSignIn = (e) => setPasswordSignIn(e.preventDefault());
  return (
    <div className="main-container">
      <div className="formContainer position-absolute">
        <form action="" className="d-flex flex-column row-gap-3">
          <div className="inputDiv border-0 d-flex position-relative">
            <input
              type="email"
              placeholder="E-mail"
              className="py-2 py-sm-3 ps-3 ps-md-4 pe-5 rounded-pill emailInput fw-bolder"
              value={emailSignIn}
              onChange={handleEmailSignIn}
            />
            <i className="bi bi-envelope position-absolute fw-bolder"></i>
          </div>
          <div className="inputDiv border-0 position-relative">
            <input
              type="password"
              placeholder="Password"
              className="py-2 py-sm-3 ps-3 ps-md-4 pe-5 rounded-pill passwordInput fw-bolder"
              value={passwordSignIn}
              onChange={handlePasswordSignIn}
            />
            <i className="bi bi-lock-fill position-absolute fw-bolder pointerCursorStyle"></i>
          </div>
          <div className="forgotPasswordDiv">
            <NavLink className="forgotPassword fw-bolder">
              forgot password?
            </NavLink>
          </div>
          <div className="border-0">
            <input
              type="submit"
              value="Login"
              className="py-2 rounded-4 border-0 fw-bolder reachOutHover loginBtnInput"
            />
            <div className="d-flex align-items-center mt-2 text-white fw-bolder">
              <input type="checkbox" name="" id="" className="checkboxInput" />{" "}
              keep me logged in
            </div>
            <p className="pt-2 text-white fw-bolder">
              You don't have an account yet?{" "}
              <NavLink to="/register" className="registerText fw-bolder">
                Register
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
