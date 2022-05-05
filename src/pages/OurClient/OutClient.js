import React from "react";
import "./OurClient.css";
import img1 from "../../images/client/client1.png";
import img2 from "../../images/client/client2.png";
import img3 from "../../images/client/client3.png";
import img4 from "../../images/client/client4.png";

const OutClient = () => {
  return (
    <div className="container mb-4">
      <h1 className="text-center my-4 text-danger">Our partners</h1>
      <div className="client-container">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
    </div>
  );
};

export default OutClient;
