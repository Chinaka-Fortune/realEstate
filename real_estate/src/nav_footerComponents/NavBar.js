import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const NavBar = () => {
  const [searchWorkSpaceAmount, setSearchWorkAmount] = useState(null);
  const [searchStoreAmount, setSearchStoreAmount] = useState(null);
  const [searchHallAmount, setSearchHallAmount] = useState(null);
  const handleWorkSpaceAmountChange = (e) =>
    setSearchWorkAmount(e.target.value);
  const handleStoreAmountChange = (e) => setSearchStoreAmount(e.target.value);
  const handleHallAmountChange = (e) => setSearchHallAmount(e.target.value);

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-transparent fixed-top px-md-5 ">
        <div class="container-fluid px-md-5 bg-primary">
          <span className="navbar-brand fw-bolder fs-3 text-primary">
            <em>Ziff</em>ESTATE
          </span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="NavHamburger">
              <i class="bi bi-list"></i>
            </span>
          </button>
          <div class="collapse navbar-collapse  " id="navbarText">
            <ul class="navbar-nav mb-2 mb-lg-0 ms-auto ">
              <li class="nav-item pe-4">
                <NavLink
                  to="/"
                  className="nav-link active fw-bolder text-white FindAperfectText"
                  aria-current="page"
                >
                  Home <i className="bi bi-house-door-fill"></i>
                </NavLink>
              </li>

              <div className="btn-group" role="group">
                <li class="nav-item">
                  <NavLink to="/properties" className="text-decoration-none nav-link text-white FindAperfectText fw-bolder">
                    
                    Properties
                  </NavLink>
                </li>

                <li className="nav-item  d-flex align-center dropdown propertiesDropdown">
                  <NavLink
                    to="/properties_drop"
                    className="nav-link pe-4 fw-bolder text-white FindAperfectText  "
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                  >
                    <i class="bi bi-caret-down-fill fw-bolder fs-4"></i>
                  </NavLink>
                  <ul className="dropdown-menu dropdownMenuColor propertiesCaretUl">
                    <li>
                      <NavLink
                        to="/buy_properties"
                        className="dropdown-item  text-white border-bottom border-white"
                      >
                        Buy properties
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/sell_properties"
                        className="dropdown-item  text-white border-bottom border-white"
                      >
                        Sell properties
                      </NavLink>
                    </li>
                    <li className="dropend">
                      <NavLink
                        className="dropdown-item dropdown-toggle  bg-transparent text-white LiNavLink border-bottom border-white"
                        data-bs-toggle="dropdown"
                      >
                        Rent Properties
                      </NavLink>
                      <ul className="dropdown-menu dropdownMenuColor">
                        <li>
                          <NavLink
                            className="dropdown-item bg-transparent border-bottom border-white"
                            data-bs-toggle="modal"
                            data-bs-target="#homeRentageModal"
                            role="button"
                          >
                            Home
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item bg-transparent border-bottom border-white"
                            data-bs-toggle="modal"
                            data-bs-target="#workSpaceRentageModal"
                            role="button"
                          >
                            Work space
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item bg-transparent border-bottom border-white"
                            data-bs-toggle="modal"
                            data-bs-target="#storeRentageModal"
                            role="button"
                          >
                            store
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item bg-transparent"
                            data-bs-toggle="modal"
                            data-bs-target="#HallRentageModal"
                            role="button"
                          >
                            Hall
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </div>
              <li className="nav-item">
                <NavLink
                  to="/service"
                  className="nav-link pe-4 fw-bolder text-white FindAperfectText"
                >
                  Services{" "}
                  <i className="bi bi-gear-wide text-white FindAperfectText"></i>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/search"
                  className="nav-link pe-4 fw-bolder text-white FindAperfectText"
                >
                  Search
                  <i className="bi bi-search text-white FindAperfectText"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link pe-4 fw-bolder text-white FindAperfectText"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link  fw-bolder text-white FindAperfectText"
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/favourite"
                  className="nav-link  fw-bolder text-white FindAperfectText"
                >
                  <i className="bi bi-heart-fill text-danger">20</i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* RENTAGE OF HOME */}
      <div
        className="modal fade"
        id="homeRentageModal"
        tabindex="3"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modalBackGround">
            <form action="" className="p-5">
              <div className="container-fluid">
                <div class="row g-2">
                  <div className="col">
                    <form action="" className="row">
                      <div className="d-flex column-gap-3 mb-3">
                        <select
                          class="form-select w-75 normalFirstAnimationLeft"
                          aria-label="Default select example"
                        >
                          <option selected>Country</option>
                          <option value="1">Nigeria</option>
                          <option value="2">Ghana</option>
                          <option value="3">South-Africa</option>
                          <option value="3">UK</option>
                          <option value="3">Spain</option>
                        </select>

                        <select
                          class="form-select w-75 normalFirstAnimationRight"
                          aria-label="Default select example"
                        >
                          <option selected>State</option>
                          <option value="1">Lagos</option>
                          <option value="2">Ibadan</option>
                          <option value="3">kogi</option>
                          <option value="3">sokoto</option>
                          <option value="3">ogun</option>
                        </select>
                      </div>

                      <div className="d-flex column-gap-3 mb-3">
                        <select
                          class="form-select w-75  normalFirstAnimationRight"
                          aria-label="Default select example"
                        >
                          <option selected>Town</option>
                          <option value="1">ikotun</option>
                          <option value="2">igando</option>
                          <option value="3">iyana ipaja</option>
                          <option value="3">idimu</option>
                          <option value="3">isheri</option>
                        </select>

                        <select
                          class="form-select w-75 normalFirstAnimationLeft"
                          aria-label="Default select example"
                        >
                          <option selected>Bathroom</option>
                          <option value="1">Bathroom 1</option>
                          <option value="2">Bathroom 2</option>
                          <option value="3">Bathroom 3</option>
                          <option value="3">Bathroom 4</option>
                          <option value="3">Bathroom 5</option>
                        </select>
                      </div>
                      <div className="d-flex column-gap-3">
                        <select
                          class="form-select w-75  normalFirstAnimationRight"
                          aria-label="Default select example"
                        >
                          <option selected>Bed</option>
                          <option value="1">Bed 1</option>
                          <option value="2">Bed 2</option>
                          <option value="3">Bed 3</option>
                          <option value="3">Bed 4</option>
                          <option value="3">Bed 5</option>
                        </select>
                        <select
                          class="form-select w-75 normalFirstAnimationLeft"
                          aria-label="Default select example"
                        >
                          <option selected>local Gov.</option>
                          <option value="1">Alimosho</option>
                          <option value="2">Agege</option>
                          <option value="3">Amuwo-Idofin</option>
                          <option value="3">Apapa</option>
                          <option value="3">Ajeromi-Ifelodun</option>
                        </select>
                      </div>
                      <button
                        type="button"
                        className="rounded btn btn-primary w-50 mx-auto mt-3"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* RENTAGE FOR WORK SPACE */}

      <div
        className="modal fade"
        id="workSpaceRentageModal"
        tabindex="3"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modalBackGround">
            <form action="" className="p-md-5 px-2 py-4">
              <div className="container-fluid">
                <div class="row g-2">
                  <div className="col">
                    <form action="" className="row">
                      <div className="d-flex column-gap-3 mb-3">
                        <select
                          class="form-select w-75 normalFirstAnimationLeft"
                          aria-label="Default select example"
                        >
                          <option selected>Country</option>
                          <option value="1">Nigeria</option>
                          <option value="2">Ghana</option>
                          <option value="3">South-Africa</option>
                          <option value="3">UK</option>
                          <option value="3">Spain</option>
                        </select>

                        <select
                          class="form-select w-75 normalFirstAnimationRight"
                          aria-label="Default select example"
                        >
                          <option selected>State</option>
                          <option value="1">Lagos</option>
                          <option value="2">Ibadan</option>
                          <option value="3">kogi</option>
                          <option value="3">sokoto</option>
                          <option value="3">ogun</option>
                        </select>
                      </div>

                      <div className="d-flex column-gap-3 mb-3">
                        <select
                          class="form-select normalFirstAnimationLeft"
                          aria-label="Default select example"
                        >
                          <option selected>local Gov.</option>
                          <option value="1">Alimosho</option>
                          <option value="2">Agege</option>
                          <option value="3">Amuwo-Idofin</option>
                          <option value="3">Apapa</option>
                          <option value="3">Ajeromi-Ifelodun</option>
                        </select>

                        <select
                          class="form-select   normalFirstAnimationRight"
                          aria-label="Default select example"
                        >
                          <option selected>Town</option>
                          <option value="1">ikotun</option>
                          <option value="2">igando</option>
                          <option value="3">iyana ipaja</option>
                          <option value="3">idimu</option>
                          <option value="3">isheri</option>
                        </select>
                      </div>
                      <div className="d-flex column-gap-3">
                        <input
                          type="number"
                          placeholder="Price Range"
                          className="rounded amountInput normalFirstAnimationLeft form-control w-100"
                          value={searchWorkSpaceAmount}
                          onChange={handleWorkSpaceAmountChange}
                        />
                      </div>
                      <button
                        type="button"
                        className="rounded btn btn-primary w-50 mx-auto mt-3"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Rentage for Store */}

      <div
        className="modal fade"
        id="storeRentageModal"
        tabindex="3"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modalBackGround">
            <form action="" className="p-md-5 px-3 py-4">
              <div className="container-fluid">
                <div class="row g-2">
                  <div className="col">
                    <form action="" className="row">
                      <div className="d-flex column-gap-3 mb-3">
                        <select
                          class="form-select w-75 normalFirstAnimationLeft"
                          aria-label="Default select example"
                        >
                          <option selected>Country</option>
                          <option value="1">Nigeria</option>
                          <option value="2">Ghana</option>
                          <option value="3">South-Africa</option>
                          <option value="3">UK</option>
                          <option value="3">Spain</option>
                        </select>

                        <select
                          class="form-select w-75 normalFirstAnimationRight"
                          aria-label="Default select example"
                        >
                          <option selected>State</option>
                          <option value="1">Lagos</option>
                          <option value="2">Ibadan</option>
                          <option value="3">kogi</option>
                          <option value="3">sokoto</option>
                          <option value="3">ogun</option>
                        </select>
                      </div>

                      <div className="d-flex column-gap-3 mb-3">
                        <select
                          class="form-select w-75 normalFirstAnimationLeft"
                          aria-label="Default select example"
                        >
                          <option selected>local Gov.</option>
                          <option value="1">Alimosho</option>
                          <option value="2">Agege</option>
                          <option value="3">Amuwo-Idofin</option>
                          <option value="3">Apapa</option>
                          <option value="3">Ajeromi-Ifelodun</option>
                        </select>

                        <select
                          class="form-select w-75  normalFirstAnimationRight"
                          aria-label="Default select example"
                        >
                          <option selected>Town</option>
                          <option value="1">ikotun</option>
                          <option value="2">igando</option>
                          <option value="3">iyana ipaja</option>
                          <option value="3">idimu</option>
                          <option value="3">isheri</option>
                        </select>
                      </div>
                      <div className="d-flex column-gap-3">
                        <input
                          type="number"
                          placeholder="Price Range"
                          className="rounded amountInput normalFirstAnimationLeft form-control w-100"
                          value={searchStoreAmount}
                          onChange={handleStoreAmountChange}
                        />
                      </div>
                      <button
                        type="button"
                        className="rounded btn btn-primary w-50 mx-auto mt-3"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Rentage for Store */}

      <div
        className="modal fade"
        id="HallRentageModal"
        tabindex="3"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modalBackGround">
            <form action="" className="p-md-5 px-3 py-4">
              <div className="container-fluid">
                <div class="row g-2">
                  <div className="col">
                    <form action="" className="row">
                      <div className="d-flex column-gap-3 mb-3">
                        <select
                          class="form-select w-75 normalFirstAnimationLeft"
                          aria-label="Default select example"
                        >
                          <option selected>Country</option>
                          <option value="1">Nigeria</option>
                          <option value="2">Ghana</option>
                          <option value="3">South-Africa</option>
                          <option value="3">UK</option>
                          <option value="3">Spain</option>
                        </select>

                        <select
                          class="form-select w-75 normalFirstAnimationRight"
                          aria-label="Default select example"
                        >
                          <option selected>State</option>
                          <option value="1">Lagos</option>
                          <option value="2">Ibadan</option>
                          <option value="3">kogi</option>
                          <option value="3">sokoto</option>
                          <option value="3">ogun</option>
                        </select>
                      </div>

                      <div className="d-flex column-gap-3 mb-3">
                        <select
                          class="form-select w-75 normalFirstAnimationLeft"
                          aria-label="Default select example"
                        >
                          <option selected>local Gov.</option>
                          <option value="1">Alimosho</option>
                          <option value="2">Agege</option>
                          <option value="3">Amuwo-Idofin</option>
                          <option value="3">Apapa</option>
                          <option value="3">Ajeromi-Ifelodun</option>
                        </select>

                        <select
                          class="form-select w-75  normalFirstAnimationRight"
                          aria-label="Default select example"
                        >
                          <option selected>Town</option>
                          <option value="1">ikotun</option>
                          <option value="2">igando</option>
                          <option value="3">iyana ipaja</option>
                          <option value="3">idimu</option>
                          <option value="3">isheri</option>
                        </select>
                      </div>
                      <div className="d-flex column-gap-3">
                        <input
                          type="number"
                          placeholder="Price Range"
                          className="rounded amountInput normalFirstAnimationLeft form-control w-100"
                          value={searchHallAmount}
                          onChange={handleHallAmountChange}
                        />
                      </div>
                      <button
                        type="button"
                        className="rounded btn btn-primary w-50 mx-auto mt-3"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
