import React from "react";
import "./Home.css";
import StokeItems from "../StokeItems/StokeItems";
import Banner from "../../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <StokeItems />
    </div>
  );
};

export default Home;
