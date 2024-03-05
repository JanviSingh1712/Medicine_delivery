import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Features from "./screens/Features";
import React from "react";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path ="/Features" element={<Features/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
