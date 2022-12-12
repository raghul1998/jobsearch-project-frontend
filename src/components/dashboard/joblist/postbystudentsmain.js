import React, {useEffect, useState} from "react";
import "./postbystudents.css"

const getDate = (date) => {
    let date1 = new Date(date);
    return date1.getUTCDate();
}

const getMonth = (date) => {
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
                 'July', 'Aug', 'Sept', 'Oct','Nov','Dec'];
    let dat = new Date(date);
    return month[dat.getMonth()];
}

const PostByStudentsMain = (job) => {
    const jobID = localStorage.getItem("jobIdForJobPage");
    console.log(job);
    return (
        <div>
            {
                job["job"]["eventId"] === jobID &&
                <div>
                    <div className="card mt-4">
                        <div className="card-body">
                            <div className="media mb-3">
                                <div className="row">
                                    <div className="col-1">
                                        <img src={job["job"]["profileImage"]}
                                        className="d-block ui-w-40 rounded-circle" alt=""/>
                                    </div>

                                    <div className="col-11">
                                        <div className="media-body">
                                            {job["job"]["firstName"]}
                                            &nbsp;
                                            {job["job"]["lastName"]}
                                            &nbsp;
                                            <div className="text-muted small">
                                                {
                                                    getDate(job["job"]["postTime"])
                                                }
                                                &nbsp;
                                                {
                                                    getMonth(job["job"]["postTime"])
                                                }
                                                &nbsp;
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <img className="ui-rect ui-bg-cover" src={job["job"]["image"]}/>

                            <p className="pt-3">
                                {job["job"]["shortDescription"]}
                            </p>
                        </div>
                    </div>
                </div>
            }
            <br/>
        </div>
    )
}

export default PostByStudentsMain;