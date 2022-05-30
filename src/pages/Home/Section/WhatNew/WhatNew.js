import React from "react";
import "./WhatNew.css";
import img1 from "../../../../images/future1.jpg";
import img2 from "../../../../images/future2.jpg";

const WhatNew = () => {
  return (
    <section className="container">
      <hr />
      <h2 className="text-center text-primary fw-bold my-4">
        WHAT'S NEW OUR WAREHOUSE
      </h2>
      <div className="what-new-container md:flex-wrap">
        <div className="border rounded-3 ">
          <img className="img-fluid rounded" src={img1} alt="" />
          <p className="text-center ">We are adding some new collection.</p>
          <button className="btn btn-primary d-block mx-auto mb-2  ">
            See whats new now
          </button>
        </div>
        <div className="border rounded-3 ">
          <img className="img-fluid rounded" src={img2} alt="" />
          <p className="text-center ">We are adding some new collection.</p>

          <button className="btn btn-primary d-block mx-auto mb-2  ">
            See whats new now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatNew;
