import React from 'react';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

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
import OrganizerEventsPage from "./components/OrganizerEventsPage";
import EditProfile from "./components/EditProfile";
import Testing from "./components/Testing/test";
import NewPost from "./components/OrganizerEventsPage/NewPost";

import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from "react-router-dom";

const reducer = combineReducers({today})
const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route index path="/landing" element={<LandingPage/>}/>

                    <Route index path="/" element={<Testing/>}/>

                    <Route index path="/login" element={<Login/>}/>

                    <Route index path="/signin" element={<Signin/>}/>

                    <Route index path="/register" element={<Register/>}/>

                    <Route index path="/signup" element={<SignUp/>}/>

                    <Route index path="/forgotpassword" element={<ForgotPassword/>}/>

                    <Route index path="/privacy-policy" element={<PrivacyPolicy/>}/>

                    <Route index path="/feedpage" element={<Index/>}/>

                    <Route index path="/new-event" element={<NewEvent/>}/>

                    <Route index path="/event" element={<OrganizerEventsPage/>}/>

                    <Route index path="/edit-profile" element={<EditProfile/>}/>

                    <Route index path="/event-new-post" element={<NewPost/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
