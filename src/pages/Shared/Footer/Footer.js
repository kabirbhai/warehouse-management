import React from "react";
import { BeakerIcon } from "@heroicons/react/solid";
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
          <p>
            <BeakerIcon className="h-5 w-5 text-blue-500" />
          </p>
          <p></p>
        </div>
        <div></div>
      </footer>
    </>
  );
};

export default Footer;
