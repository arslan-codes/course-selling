import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <div>
      <div className="">
        <header className="absolute inset-x-2 top-0 z-50 text-white">
          <nav className="flex  justify-end p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1 lg:justify-center">
              <span className="-m-1.5 p-1.5 text-lg bold">
                <Link to="/" className="font-extrabold text-3xl">
                  Enablers
                </Link>
              </span>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-center">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                <Link to="/">Home</Link>
                {/* <span aria-hidden="true">&rarr;</span> */}
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-center">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                <Link to="/blogs">Blogs</Link>
                {/* <span aria-hidden="true">&rarr;</span> */}
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-center">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                <Link to="/contacts">Contact</Link>

                {/* <span aria-hidden="true">&rarr;</span> */}
              </a>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
