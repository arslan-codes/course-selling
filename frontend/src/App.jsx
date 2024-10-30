import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Fix the typo here
import Layout from "./components/Layout";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div>
      <div>This is a course selling App</div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/blogs" element={<Blog />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
