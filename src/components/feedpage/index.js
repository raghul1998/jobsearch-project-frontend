import React from "react";
import {useNavigate} from "react-router-dom";
import JobListsPost from "./jobslist/joblistspost";

const FeedPageMain = () => {
    let roleUser = localStorage.getItem('userRole');
    let navigate = useNavigate();


    return (
        <>
            <div>
                <JobListsPost/>
            </div>
        </>
    )
}


export default FeedPageMain;