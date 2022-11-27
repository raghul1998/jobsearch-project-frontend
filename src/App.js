import React from 'react';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import "./vendors/bootstrap/dist/css/bootstrap.min.css";
import "./vendors/font-awesome/css/font-awesome.min.css";
import Signin from "./components/Login/login"
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import SignUp from "./components/Register/register";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NewEvent from "./components/NewEvent";
import Index from "./components/FeedPage";
import today from "./reducers/today";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import OrganizerEventsPage from "./components/OrganizerEventsPage";
import EditProfile from "./components/EditProfile";
import Testing from  "./components/Testing/test";
import NewPost from "./components/OrganizerEventsPage/NewPost";


const reducer = combineReducers({today})
const store = createStore(reducer);

const App = () => {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/landing" exact={true}>
            <LandingPage/>
          </Route>
          <Route path="/" exact={true}>
            <Testing/>
          </Route>
          <Route path="/login" exact={true}>
            <Login/>
          </Route>
          <Route path="/signin" exact={true}>
            <Signin/>
          </Route>
          <Route path="/register" exact={true}>
            <Register/>
          </Route>
          <Route path="/signup" exact={true}>
            <SignUp/>
          </Route>
          <Route path="/forgotpassword" exact={true}>
            <ForgotPassword/>
          </Route>
          <Route path="/privacy-policy" exact={true}>
            <PrivacyPolicy/>
          </Route>
          <Route path="/feedpage" exact={true}>
            <Index/>
          </Route>

          <Route path="/new-event" exact={true}>
            {/*<NewEventPage/>*/}
            <NewEvent/>
          </Route>

          <Route path="/event" exact={true}>
            <OrganizerEventsPage/>
          </Route>

          <Route path="/edit-profile" exact={true}>
            <EditProfile/>
          </Route>

          <Route path="/event-new-post" exact={true}>
            <NewPost/>
          </Route>


        </BrowserRouter>
      </Provider>
  );
};

export default App;
