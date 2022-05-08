import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import LoginIcon from "../../../images/icon/download.png";
import LoveIcon from "../../../images/icon/love.png";
import BagIcon from "../../../images/icon/bag.png";

import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <header>
        <div className="top-nav-container">
          <div className="logo">
            <Link to="/">WAREHOUSE</Link>
          </div>
          <div className="top-nav">
            <div>
              {user ? (
                <span className="logout-btn" onClick={() => signOut(auth)}>
                  Logout
                </span>
              ) : (
                <Link to="/login">
                  <img
                    className="login-btn"
                    height={35}
                    src={LoginIcon}
                    alt=""
                  />{" "}
                </Link>
              )}
            </div>
            <Link to="/addToBag">
              <img height={50} src={BagIcon} alt="" />
            </Link>

            <img height={27} src={LoveIcon} alt="" />
          </div>
        </div>

        <nav>
          <div className="nav-item">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About us</Link>
          </div>
          <div className="after-login">
            {user ? (
              <div>
                <Link to="/myItem">My item</Link>
                <Link to="/manageItem">Manage item</Link>
                <Link to="/addItem">Add item</Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
