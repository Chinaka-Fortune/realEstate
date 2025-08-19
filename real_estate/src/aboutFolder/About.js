import React from "react";
import "../index.css";
import "./About.css";
import blackHouse from "../home/homeImages/darkBuilding.jpg";
const About = () => {
  return (
    <div className="container-fluid">
      <div className="row g">
        <h3 className="text-center mt-4 mt-sm-0">ABOUT US</h3>
        <div className="">
        <div className="d-md-flex column-gap-5 align-items-center mb-4 aboutUsBigScreen mx-auto">
          <div className="col-md-5 col-sm-12">
            <div className='aboutImageDiv'>
            <img src={blackHouse} alt="" className="" />
            </div>
          </div>
          <div className="col-md-5 ">
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
              odit cupiditate repellat non voluptatibus iure velit delectus unde
              ducimus repudiandae ullam eius ea dolores eum itaque quod quis?
              Laudantium magni esse odio voluptatem repellat, quisquam tempore
              totam cumque! Facere, corrupti ipsam laboriosam similique,
              explicabo ex at quidem obcaecati nihil possimus quis veritatis
              impedit commodi hic, reiciendis quod fugiat praesentium sunt
              earum. Quaerat, debitis eaque repellat ducimus libero explicabo
              cum ea animi consequuntur quidem aliquam et voluptatum vitae,
              delectus nulla eveniet. Explicabo dolorum, debitis id tempora
              nesciunt dolor eveniet! Quasi, hic rem, eos eaque vero dolor quam
              ipsum exercitationem molestias quo esse modi obcaecati, commodi ea
              voluptates asperiores! Error repellat, nisi dolore incidunt
              voluptatum, deserunt et, placeat illum provident architecto
              ducimus.
            </p>
          </div>
        </div>
      </div>

      <div className="row gap-2 d-flex justify-content-center mb-3">
        <div className="col-5 col-lg-2 py-3 bg-primary">
          <h3 className="text-center">4,567</h3>
          <p className="text-nowrap text-center fw-bold">Houses sold</p>
        </div>
        <div className="col-5 col-lg-2 bg-primary d-flex align-items-center align-items-center flex-column justify-content-center">
          <h3 className="text-center">44,034</h3>
          <p className="text-nowrap text-center fw-bold">Lands</p>
        </div>
        <div className="col-5 col-lg-2 py-3 bg-primary">
          <h3 className="text-center">1,203,004</h3>
          <p className="text-nowrap text-center fw-bold">Properties</p>
        </div>
        <div className="col-5 col-lg-2 py-3 bg-primary">
          <h3 className="text-center">4034</h3>
          <p className="text-nowrap text-center fw-bold">ShortLet rented</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
