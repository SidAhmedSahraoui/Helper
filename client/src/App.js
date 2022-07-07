import React from "react";
import { Route, Routes } from "react-router-dom";

import { Provider } from 'react-redux';

// Redux store
import store from './redux/store';

// layouts
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer";
// pages
import Home from "./components/pages/Home";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Dashboard from "./components/pages/Dashboard";

import './App.css';
import NotFound from "./components/pages/404";

function App() {
  return (
      <Provider store={store}>
      <div className="App">
        <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/profile/*" element={<Dashboard />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        <Footer />
      </div>
      </Provider>
   
  );
}

export default App;
