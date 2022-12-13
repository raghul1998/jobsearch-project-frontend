import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getJobByID, applyJob, unapplyJob} from "../../../service/jobPostService";
import PostByStudents from "./postbystudents";

const getDate = (date) => {
    let dateTemp = new Date(date);
    let month = dateTemp.getUTCMonth() + 1;
    let day = dateTemp.getUTCDate();
    let year = dateTemp.getUTCFullYear();
    return day;
}

const getMonth = (date) => {
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov',
                 'Dec'];
    let dat = new Date(date);
    return month[dat.getMonth()];
}

const getDay = (date) => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dat = new Date(date);
    return days[dat.getDay()];
}

const IndividualJobMain = () => {
    const jobID = localStorage.getItem('jobIdForJobPage');
    const [job, setJob] = useState({title: ''})
    const [showMore, setShowMore] = useState(null);
    let [applied, setApplied] = useState(false);
    let [appliedCount, setAppliedCount] = useState();
    let navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            const data = await getJobByID(jobID);
            setJob(data);
            setAppliedCount(data["applies"])
        }

        getData();
    }, [])

    if (job["appliedBy"] != null) {
        for (let i = 0; i < job["appliedBy"].length; i++) {
            if (job["appliedBy"][i] === localStorage.getItem("userId")) {
                applied = true;
            }
        }
    }

    useEffect(() => {
        //console.log("force rerender");
    }, [applied])

    const applyJobFunction = () => {
        if (!applied) {
            setApplied(true)
            applyJob(localStorage.getItem("userId"), job["_id"]);
            setAppliedCount(appliedCount + 1)
        } else {
            setApplied(false);
            unapplyJob(localStorage.getItem("userId"), job["_id"]);
            setAppliedCount(appliedCount - 1)
        }
    }

    const navigateToShare = () => {
        navigate("/job-share-post")
    }

    return (
        <>
            <div className="section-block">
                <div className="funding-meta">
                    <h1>{job["eventName"]}</h1>
                    <span className="type-meta">
                        <i className="fa fa-user"></i>
                        {job["organiserName"]}
                    </span>

                    <div className="video-frame">
                        <img width="399" height="299" src={job["image"]}/>
                    </div>

                    <p className="wap-event-other-info pt-3">
                        <i className="fas fa-calendar-alt wap-icon pe-2"/>
                        <a href="#">
                            <span className="wap-date">
                                {getDay(job["dateOfEvent"])}
                                &nbsp;
                                {getDate(job["dateOfEvent"])}
                                &nbsp;
                                {getMonth(job["dateOfEvent"])}
                                &nbsp;
                            </span>
                        </a>

                        <i className="fas fa-clock wap-icon pe-2"/>
                        <span className="wap-time">
                            {job["timeOfEvent"]}
                            &nbsp;
                        </span>

                        <i className="fas fa-map-marker-alt wap-icon pe-2"/>
                        <span className="wap-location">
                            {job["location"]}
                        </span>
                    </p>

                    <p className="wap-desc pt-2">
                        {job["shortDescription"]}
                    </p>

                    {
                        localStorage.getItem('userRole') !== 'organiser' &&
                        <div className="mt-3 d-flex flex-row muted-color">
                            {
                                !applied &&
                                <button className="buy-button" style={{marginLeft: "-3px"}}
                                        onClick={applyJobFunction}>
                                    Apply
                                </button>
                            }

                            {
                                applied &&
                                <button className="buy-button" style={{marginLeft: "-3px"}}
                                        onClick={applyJobFunction}>
                                    Unapply
                                </button>
                            }
                        </div>
                    }

                    <div className="mt-2 d-flex flex-row muted-color">
                    <span>
                        Number of people applied: {appliedCount}
                    </span>
                    </div>

                    <div>
                        {
                            showMore ?
                            <>
                                <p className="wap-desc pt-2">
                                    {job["longDescription"]}
                                </p>
                                <a className="wap-desc pt-2"
                                   onClick={() => setShowMore(false)}>
                                    Show Less
                                </a>
                            </>
                                     :
                            <>
                                <br/>
                                <a className="wap-desc pt-2"
                                   onClick={() => setShowMore(true)}>
                                    Show More
                                </a>
                            </>
                        }
                    </div>
                </div>
            </div>

            {
                localStorage.getItem('userRole') !== 'organiser' &&
                <div className="section-block signup"
                     style={{backgroundColor: "grey"}}>
                    <div className="sign-up-form">
                        <form>
                            <div>
                                <p className="p">
                                    Click here to share this job with other students
                                </p>
                                <button className="buy-button"
                                        onClick={navigateToShare} type="submit">
                                    <i className="fas fa-plus-circle wap-add-icon me-2">
                                    </i>
                                    <span>
                                        Share Job
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }

            <div className="col-12 wap-border">
                <div className="row">
                    <PostByStudents/>
                </div>
            </div>

        </>
    )
}

export default IndividualJobMain;