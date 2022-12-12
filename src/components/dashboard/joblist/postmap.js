import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "./postmap.css"

const PostMapComponent = (post) => {
    let [user, setUser] = useState(null);
    let navigate = useNavigate();

    const goToJobPage = (post) => {
        localStorage.setItem('jobIdForJobPage', post["post"]["_id"]);
        console.log("Navigating to event page")
        navigate("/job-event");
    }

    return (
        <>
            <div className="card col-12">

                <div className="d-flex justify-content-between p-2 px-3">

                    <div className="d-flex flex-row align-items-center">
                        <img
                            src="https://pixy.org/download/1202230/"
                            width="50" className="rounded-circle"/>
                        <div className="d-flex flex-column ml-2">
                            <span className="text-primary font-weight-bold ps-2 mouse-link"
                                  onClick={() => goToJobPage(post)}>
                                {post['post']['eventName']}
                            </span>
                            <small className="ps-2">
                                {post["post"]["organiserName"]}
                            </small>
                        </div>
                    </div>

                    <div className="d-flex flex-row mt-1 ellipsis">
                        <small className="mr-2">
                            {
                                (new Date(post["post"]["postTime"])).toISOString().split("T")[0]
                            }
                        </small>
                    </div>
                </div>

                <img src={post["post"]["image"]} className="img-fluid" alt="Image"/>

                <div className="p-2">
                    <p className="text-primary text-justify">
                        {post['post']['shortDescription']}
                    </p>
                    <hr/>
                </div>
            </div>
            <br/>
        </>
    )
}

export default PostMapComponent;