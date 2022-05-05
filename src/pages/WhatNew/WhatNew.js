import React from "react";
import "./WhatNew.css";
import img1 from "../../images/banner/2.jpg";

const WhatNew = () => {
  return (
    <div className="container">
      <h2 className="text-center text-danger my-4">What's new our WAREHOUSE</h2>
      <div className="what-new-container md:flex-wrap">
        <div className="border">
          <img className="img-fluid" src={img1} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            odit totam nostrum quae incidunt mollitia dignissimos dolores!
            Temporibus maiores labore ipsa reiciendis illo odit minima harum
            fugiat, vero facilis ab.
          </p>
          <button>See whats new now</button>
        </div>
        <div className="border">
          <img className="img-fluid" src={img1} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            ipsam suscipit eaque amet velit blanditiis facilis. Voluptatibus
            vitae laborum aspernatur vero tempore adipisci eos ipsam, officiis
            similique quidem nobis nihil!
          </p>

          <button>See whats new now</button>
        </div>
      </div>
    </div>
  );
};

export default WhatNew;
