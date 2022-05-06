import React from "react";
import "./Footer.css";
import faceBook from "../../../images/social/facebook.png";
import instagram from "../../../images/social/instagram.png";
import twitter from "../../../images/social/twitter.png";
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
          <img src={faceBook} alt="" />
          <img height={20} src={instagram} alt="" />
          <img src={twitter} alt="" />
        </div>
        <div></div>
      </footer>
    </>
  );
};

export default Footer;
