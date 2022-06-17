import React from "react";

import './App.css';
import Home from "./components/pages/Home";
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer";
import {BrowserRouter as Router , Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        <Footer />
      </div>

    </Router>
   
  );
}

export default App;
