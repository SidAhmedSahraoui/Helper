import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Button from '@mui/material/Button';
import Login from "./components/auth/login";
function App() {
  return (
    <div className="App">
        <Button variant="contained">Hello World</Button>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={Login} />
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
