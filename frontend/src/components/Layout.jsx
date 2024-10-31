import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Hero from "../pages/Hero";

const Layout = () => {
  return (
    <div>
      <div>
        {" "}
        <Header />
      </div>

      <div
        style={{
          height: "90vh",
          backgroundColor: "gray",
        }}
      >
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
