import React from "react";
import {BrowserRouter as Router , Route, Routes } from "react-router-dom";

import { Provider } from 'react-redux';

// Redux store
import store from './redux/store';
import './App.css';
import Home from "./components/pages/Home";
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Dashboard from "./components/pages/Dashboard";
function App() {
  return (
    <Router>
      <Provider store={store}>
      <div className="App">
        <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Dashboard />} />
          </Routes>
        <Footer />
      </div>
      </Provider>
    </Router>
   
  );
}

export default App;
