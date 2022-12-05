import React from "react";
import Event from "./event";
import SideComponent from "./sideComponent";
import "./organizerEvents.css"
import NavigationSidebar from "../FeedPage/NavigationSidebar/NavigationSidebar";
import NavigationBar from "../FeedPage/NavigationBar";
import TodaysEventList from "../FeedPage/TodaysEvents";
import FeedProfile from "../FeedPage/FeedProfile";
import Posts from "../FeedPage/Posts";
import EventNewPost from "./EventNewPost";
const IndexEventNewPost = () => {
    return(
        /*        <>
                    <div className="row mt-4">
                        <div className="col-sm-2 col-md-2 col-lg-1 col-xl-2">
                           <NavigationBar/>
                        </div>
                        <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                            <Event/>
                        </div>
                        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                            <TodaysEventList/>
                        </div>
                    </div>
                </>*/
        <>
            <div className="row mt-2 wap-outer-feed mb-5">
                <div className="col-12">
                    <NavigationBar/>
                </div>
            </div>
            <div className="row mt-2 wap-outer-feed">
                <div className="row mt-4">
                    <div className="d-sm-none d-md-none d-lg-block col-lg-3 col-xl-3">
                        <FeedProfile/>
                    </div>
                    <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                        <EventNewPost/>
                    </div>
                    <div className="d-sm-none d-md-none d-lg-block col-lg-2 col-xl-3">
                        <TodaysEventList/>
                    </div>
                </div>
            </div>

        </>
    );
}
export default IndexEventNewPost;