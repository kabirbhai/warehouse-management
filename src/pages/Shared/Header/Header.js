import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <div>
          <Link to="/">wareHOUSE</Link>
        </div>
        <div className="nav-item">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About us</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
