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
import Messages from "./components/pages/Messages";
import Posts from "./components/pages/Posts";

import './App.css';
function App() {
  return (
      <Provider store={store}>
      <div className="App">
        <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/home" element={<Dashboard />} />
            <Route exact path="/messages" element={<Messages />} />
            <Route exact path="/posts" element={<Posts />} />
          </Routes>
        <Footer />
      </div>
      </Provider>
   
  );
}

export default App;
