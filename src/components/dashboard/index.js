import React from "react";
import "../../assets/css-dashboard/w3.css";
import "../../assets/css-dashboard/w3-theme-blue-grey.css";
import "../../assets/css-dashboard/css.css";
import "./dashboard.css";
import Profile from "./profile/index";
import TodaysEventList from "./todayEvents/index";
import {useNavigate} from "react-router-dom";

import NavigationBar from "./navigationSidebar";

const dashboard = () => {
    
    // debugger;
    let history = useNavigate();
    const userRole = localStorage.getItem('userRole');
    
    const goToNewEventPage = () => {
      history("/new-event");
    }

    return(
        <>
            <div className="row mt-2 wap-outer-feed mb-5">
                <div className="col-12">
                    <NavigationBar/>
                </div>
            </div>
            <div className="row mt-2 wap-outer-feed">
                <div className="row mt-4">
                    <div className="d-sm-none d-md-none d-lg-block col-lg-3 col-xl-3 ps-5 pe-5">
                        <div className="row pb-5">
                        <Profile/>
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
                       {/* code for posts*/}
                       middle content
                    </div>
                    <div className="d-sm-none d-md-none d-lg-block col-lg-2 col-xl-3">
                        <TodaysEventList/>
                    </div>
                </div>
            </div>

        </>
        )
        };

export default dashboard;