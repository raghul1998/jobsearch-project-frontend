import React from "react";
import {useNavigate} from "react-router-dom";

const TodaysEventsListItem = (post)  => {
    console.log("post to be rendered",post["post"]["_id"])
    const navigate = useNavigate();

    const goToEventPage = (post) => {
      localStorage.setItem('eventIdForEventPage', post["post"]["_id"]);
      navigate("./event")
    }

    return(
        <div className="pt-2">
        <li className="list-group-item ms-2">
            <div className="w3-card w3-round w3-white w3-center">
                <div className="col-8">
                    <h4>{post["post"]["eventName"]}</h4>
                    <div className="w3-container">
                        <img
                            src={post["post"]["image"]}
                            alt="Forest" width="100%"/>
                        <p><strong>{post["post"]["eventName"]}</strong></p>
                        <p>{post["post"]["timeOfEvent"]}</p>
                        <p>
                            <button className="w3-button w3-block w3-theme-l4" onClick={() => goToEventPage(post)}>Info</button>
                        </p>
                        <div className="pt-3">

                        </div>
                    </div>
                </div>

            </div>
        </li>
        </div>

    );
}
export default TodaysEventsListItem;

