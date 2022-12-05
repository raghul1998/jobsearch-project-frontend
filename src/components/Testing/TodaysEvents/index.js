import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getLatestPosts} from "../../../services/eventService";

const TodaysEvents = () => {
    const [posts, setPosts] = new useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getLatestPosts().then((p)=>{
            setPosts(p)
        }).catch(() => {
            setPosts(null);
        })
    },[])

    useEffect(() => {
        console.log("posts",posts)
    },[setPosts])

    const goToLogin = () => {
        navigate("/signin")
    }

    return(
        <>
            {posts != null &&
            <div className="tab-content row justify-content-center" >
                <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">
                    {posts.map((post) => {
                        return(
                            <>
                                <div className="row schedule-item">
                                    <div className="col-md-10 col-sm-9">
                                        <div className=" col-2 col-sm-1 speaker">
                                            <img src={post["image"]} alt="post Image"/>
                                        </div>
                                        <div className="col-10 col-sm-11">
                                            <h4>Event Name <span>{post["eventName"]}</span></h4>
                                            <p className="float-start">{post["shortDescription"]}</p>
                                        </div>

                                    </div>
                                    <div className="col-md-2 col-sm-1">
                                        <br/>
                                        <a className="buy-tickets scrollto" onClick={() => goToLogin()}>Attend?</a>
                                        {/*<a className="buy-tickets scrollto" href="buy-tickets">View Event</a>*/}
                                    </div>
                                </div>
                            </>
                        );
                    })}

                </div>
            </div>
            }
        </>
    );
}

export default TodaysEvents;