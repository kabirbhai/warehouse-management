import React from "react";
import "./Home.css";
import Banner from "../../../images/banner/banner.png";

import StokeItems from "../StokeItems/StokeItems";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <img className="img-fluid" src={Banner} alt="" />
      </div>
      <StokeItems />
    </div>
  );
};

export default Home;
