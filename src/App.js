import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";

import "./App.css";
import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";

import LandingComponent from "./components/landing";
import SignUpPage from "./components/signup/signup.js"
import FeedPageMain from "./components/feedpage";
import IndividualJob from "./components/feedpage/jobslist/individualjob";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signupPage" element={<SignUpPage/>} exact={true}></Route>
                <Route path="/home" element={<LandingComponent/>} exact={true}></Route>
                <Route path="/" element={<LandingComponent/>} exact={true}></Route>
                <Route path="/feed-page" element={<FeedPageMain/>} exact={true}> </Route>
                <Route path="/job-event" element={<IndividualJob/>} exact={true}> </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
