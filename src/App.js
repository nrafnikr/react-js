import React from 'react';
import Navbar from "./Task/Routing/Navbar";
import Pricing from "./Task/Routing/Pricing";
import Home from "./Task/Routing/Home";
import About from "./Task/Routing/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App;