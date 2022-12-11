import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getJobByID} from "../../../service/jobPostService";

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
    let navigate = useNavigate();
    const jobID = localStorage.getItem('jobIdForJobPage');
    const [job, setJob] = useState({title: ''})
    const [showMore, setShowMore] = useState(null);

    useEffect(() => {
        async function getData() {
            const data = await getJobByID(jobID);
            setJob(data);
        }

        getData();
    }, [])

    return (
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

                <button className="btn btn-info">
                    Apply
                </button>

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
    )
}

export default IndividualJobMain;