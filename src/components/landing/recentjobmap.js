import React from "react";
import {useNavigate} from "react-router-dom";
import "./landing.css"

const RecentJobMap = (job) => {
    const navigate = useNavigate();

    const navigateToLogin= () => {
        navigate("/login");
    }

    return (
        <>
                <div className="row schedule-item border-0 border-bottom">
                <div className="col-md-10 col-sm-9">
                    <div className=" col-2 col-sm-1 speaker">
                        <img src={job["image"]} alt="job images"/>
                    </div>
                    <div className="col-10 col-sm-11">
                        <h5>
                            Job Name
                            <span>
                                {
                                    job["eventName"]
                                }
                            </span>
                        </h5>
                        <p className="float-start">
                            {job["shortDescription"]}
                        </p>
                    </div>
                </div>

                <div className="col-md-2 col-sm-1">
                    <br/>
                    <span className="buy-button"
                       onClick={() => navigateToLogin()}>
                        Apply Here
                    </span>
                </div>
            </div>
            <br/>
        </>
    )
}

export default RecentJobMap;
