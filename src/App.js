import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";

import LandingComponent from "./components/landing";
import DashboardComponent from "./components/dashboard/index.js";
import LoginComponent from "./components/login";
import SignUpPage from "./components/signup/signup.js";
import EditProfile from "./components/dashboard/editProfile/index.js";
import NewEventComponent from "./components/new-event/index";
import IndividualJob from "./components/dashboard/joblist/individualjob";
import ShareJob from "./components/dashboard/joblist/sharejob";
import Externalapi from "./components/externalApi/index.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signupPage" element={<SignUpPage />} exact={true}></Route>
        <Route path="/home" element={<LandingComponent />} exact={true}></Route>
        <Route
          path="/dashboard"
          element={<DashboardComponent />}
          exact={true}
        ></Route>
        <Route
          path="/new-event"
          element={<NewEventComponent />}
          exact={true}
        ></Route>
        <Route
          index
          path="/"
          element={<LandingComponent />}
          exact={true}
        ></Route>
        <Route path="/login" element={<LoginComponent />} exact={true}></Route>
        <Route path="/job-event" element={<IndividualJob />} exact={true}>
          {" "}
        </Route>
        <Route
          path="/edit-profile"
          element={<EditProfile />}
          exact={true}
        ></Route>
        <Route path="/job-share-post" element={<ShareJob />} exact={true}>
          {" "}
        </Route>
        <Route path="/mytest" element={<Externalapi />} exact={true}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
