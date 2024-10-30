import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
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
