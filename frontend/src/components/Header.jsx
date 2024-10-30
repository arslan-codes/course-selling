import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div
      style={{
        height: "10vh",
        backgroundColor: "red",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/contacts">Contact</Link>
      <Link to="/blogs">Blogs</Link> {/* Corrected the component name here */}
    </div>
  );
};

export default Header;
