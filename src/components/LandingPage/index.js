import React from "react";
import NavBar from "./NavBar";
import LandingFullImage from "./LandingFullImage";
import OurTeam from "./OurTeam";
import "./index.css";
import TodaysEventCard from "./TodaysEventCard";

const LandingPage = () => {
    return (
        <div className="bgcolor">
            <div className="row wap-outer-feed mb-1">
                <div className="bgcolor col-12">
                    <NavBar/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <LandingFullImage/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <TodaysEventCard/>
                </div>

            </div>
            <div className="row">
                <div className="col-12">
                    <OurTeam/>
                </div>

            </div>
        </div>
    )
}

export default LandingPage;