import React from "react";
import "./newEvent.css";
import { useNavigate } from 'react-router-dom';

const NewEvent = (post) => {
    const history = useNavigate();

    const goToEventPage = (post) => {
        localStorage.setItem('eventIdForEventPage', post["post"]["_id"]);
        history.push("./event");
        window.location.reload(false)
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

                    <p><button className="btn btn-primary" onClick={() => goToEventPage(post)}>Read More</button></p>

                </div>


            </div>
            </div>
        </>
    );
}
export default NewEvent;