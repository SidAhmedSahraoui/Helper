import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Login from "./components/auth/login";
import Home from "./components/pages/Home";
function App() {
  return (
  <Router>
    <div className="App">
      <Home />
        <Routes>
          <Route exact path='/' element={Home} />
          <Route exact path='/login' element={Login} />
        </Routes>
    </div>
  </Router>
  );
}

export default App;
