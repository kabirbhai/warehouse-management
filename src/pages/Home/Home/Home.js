import React from "react";
import "./Home.css";

import Banner from "../Section/Banner/Banner";
import OurClient from "../Section/OurClient/OutClient";
import WhatNew from "../Section/WhatNew/WhatNew";

const Home = () => {
  return (
    <div>
      <Banner />

      <WhatNew />
      <OurClient />
    </div>
  );
};

export default Home;
