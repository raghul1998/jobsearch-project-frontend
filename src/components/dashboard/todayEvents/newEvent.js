import React from "react";
import "./newEvent.css";
import { useNavigate } from 'react-router-dom';

const NewEvent = (post) => {
    const history = useNavigate();

    const goToEventPage = (post) => {
        localStorage.setItem('jobIdForJobPage', post["post"]["_id"]);
        history("/job-event");
    }

    return(
        <>
            <div className="col-ms-12">
            <div className="cardcontainer">
                <div className="photo">
                    <img src= {post["post"]["image"]}/>
                </div>
                <div className="content">
                    <p className="txt4">{post["post"]["timeOfEvent"]}</p>
                    <p className="txt5">{post["post"]["eventName"]}</p>

                    <div>
                        <button className="custom-button mt-3" style={{marginLeft: "0px"}} onClick={() => goToEventPage(post)}>
                            Read More
                        </button>
                    </div>

                </div>


            </div>
            </div>
        </>
    );
}
export default NewEvent;