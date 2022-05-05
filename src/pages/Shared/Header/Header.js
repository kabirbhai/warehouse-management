import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <header>
        <nav>
          <div>
            <Link to="/">SPORTHOUSE</Link>
          </div>
          <div className="nav-item">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About us</Link>
          </div>
          <div>
            {user ? (
              <div className="d-flex">
                <Link className="logout-btn" to="/myitem">
                  myItems{" "}
                </Link>
                <p className="logout-btn" onClick={() => signOut(auth)}>
                  logout
                </p>
              </div>
            ) : (
              <Link to="/login">Login </Link>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
