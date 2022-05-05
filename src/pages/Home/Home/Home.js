import React from "react";
import "./Home.css";
import StokeItems from "../StokeItems/StokeItems";
import Banner from "../../Banner/Banner";
import OutClient from "../../OurClient/OutClient";

const Home = () => {
  return (
    <div>
      <Banner />
      <StokeItems />
      <OutClient />
    </div>
  );
};

export default Home;
