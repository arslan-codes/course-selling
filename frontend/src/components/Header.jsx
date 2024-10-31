import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <div>
      <div class="header">
        <Link to="/" class="logo">
          Course Selling App
        </Link>
      </div>
      <div className="header-right">
        <Link to="/">Home</Link>
        <Link to="/contacts">Contact</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
    </div>
  );
};

export default Header;
