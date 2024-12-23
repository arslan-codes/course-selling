import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Fix the typo here
import Layout from "./components/Layout";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Hero from "./pages/Hero";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Hero />} />
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
