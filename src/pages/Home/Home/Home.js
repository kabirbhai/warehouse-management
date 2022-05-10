import React from "react";
import "./Home.css";

import Banner from "../Section/Banner/Banner";
import OurClient from "../Section/OurClient/OutClient";
import WhatNew from "../Section/WhatNew/WhatNew";
import Products from "../Section/Products/Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <WhatNew />
      <OurClient />
    </div>
  );
};

export default Home;
