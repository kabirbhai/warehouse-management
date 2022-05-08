import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <h5 className="loading">Loading...</h5>
    </div>
  );
};

export default Spinner;
