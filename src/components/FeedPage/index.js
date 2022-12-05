import React, {useEffect, useState} from "react";
import NavigationSidebar from "./NavigationBar/index";
import SearchComponent from "./Posts/SearchComponent";
import TodaysEventList from "./TodaysEvents";
/*import 'https://www.w3schools.com/w3css/4/w3.css';*/
/*import 'https://www.w3schools.com/lib/w3-theme-blue-grey.css';*/
// import "https://fonts.googleapis.com/css?family=Open+Sans";
//import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
import "../../assets/css-feedpage/w3.css";
import "../../assets/css-feedpage/w3-theme-blue-grey.css";
import "../../assets/css-feedpage/css.css";
import "./feed.css";
import FeedProfile from "./FeedProfile/feedprofile";
import Posts from "./Posts";
import {useNavigate} from "react-router-dom";
import NewPost from "./Posts/newPost";

const Index = () => {
    const userRole = localStorage.getItem('userRole');
    let navigate = useNavigate();
    
    const goToNewEventPage = () => {
      navigate("/new-event");
    }

    return(
        <>
            <div className="row mt-2 wap-outer-feed mb-5">
                <div className="col-12">
                    <NavigationSidebar/>
                </div>
            </div>
            <div className="row mt-2 wap-outer-feed">
                <div className="row mt-4">
                    <div className="d-sm-none d-md-none d-lg-block col-lg-3 col-xl-3 ps-5 pe-5">
                        <div className="row pb-5">
                            <FeedProfile/>
                        </div>
                        <div className="row pt-5">
                            {
                                (userRole === 'organiser' || userRole === 'both') &&
                                <div className="ps-5">
                                    <div className="form-group form-button">
                                        <input type="submit" name="signin" id="signin"  className="form-submit btn btn-primary"
                                               value="Create New Event" onClick={() => goToNewEventPage()}/>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                    <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                       {/* <Posts/>*/}
                        <NewPost/>
                    </div>
                    <div className="d-sm-none d-md-none d-lg-block col-lg-2 col-xl-3">
                        <TodaysEventList/>
                    </div>
                </div>
            </div>

        </>
        )
        };

export default Index;