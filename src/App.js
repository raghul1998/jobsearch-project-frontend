import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";

import LandingComponent from "./components/landing";
import LoginComponent from "./components/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<LandingComponent />} exact={true}></Route>
        <Route path="/" element={<LandingComponent />} exact={true}></Route>
        <Route path="/login" element={<LoginComponent />} exact={true}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
