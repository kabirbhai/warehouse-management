import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date().getFullYear();
  return (
    <>
      <footer>
        <div>
          <p>
            copyright <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />{" "}
            {today}{" "}
          </p>
        </div>
        <div>
          <p>social icon</p>
        </div>
        <div></div>
      </footer>
    </>
  );
};

export default Footer;
