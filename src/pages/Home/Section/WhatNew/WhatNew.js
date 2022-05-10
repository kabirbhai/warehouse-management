import React from "react";
import "./WhatNew.css";
import img1 from "../../../../images/banner/2.jpg";

const WhatNew = () => {
  return (
    <div className="container">
      <h2 className="text-center text-danger my-4">What's new our WAREHOUSE</h2>
      <div className="what-new-container md:flex-wrap">
        <div className="border">
          <img className="img-fluid" src={img1} alt="" />
          <p>We are adding some new collection.</p>
          <button>See whats new now</button>
        </div>
        <div className="border">
          <img className="img-fluid" src={img1} alt="" />
          <p>We are adding some new collection.</p>

          <button>See whats new now</button>
        </div>
      </div>
    </div>
  );
};

export default WhatNew;
