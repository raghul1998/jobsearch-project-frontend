import React, {useEffect, useState} from "react";
import './index.css';
import {getAllUsers} from "../../../services/profileService";
import {dislikeEvent, likeEvent} from "../../../services/eventService";
import {useNavigate} from "react-router-dom";

const FeedPostComponent = (post) => {
    const navigate = useNavigate();
    const [users, setUsers] = useState(null);
    let loading = true;
    let organiserName = null;
    let organiserProfileImage = null;

    const goToEventPage = (post) => {
      console.log("Need to show info of: ", post["post"]["_id"]);
      localStorage.setItem('eventIdForEventPage', post["post"]["_id"]);
      navigate("/event");
    }

    useEffect(() => {
        getAllUsers().then((users) => {
            setUsers(users);
        }).catch((error) => {
            setUsers(null);
        });
    }, [])
    let likedStatus = false;
    let likeCount = post["post"]["likes"];
    useEffect(() => {
        if (users != null ){
            for (let i=0;i<users.length;i++) {
                if (users[i]["_id"] === post["post"]["userId"]) {
                    organiserName = users[i]["firstName"] + " " + users[i]["lastName"];
                    organiserProfileImage = users[i]["profileImage"];
                    loading = false
                    break;
                }
            }
        }
    }, [users])


    function likeClickHandler() {
        likedStatus=false;
       /* console.log("At Start");
        console.log(likedStatus);*/
        for (let i=0;i<post["post"]["likedBy"].length;i++){
            if(post["post"]["likedBy"] == localStorage.getItem("userId")){
                likedStatus = true;
            }
        }
       /* console.log("At End OF For");
        console.log(likedStatus);*/
        if(likedStatus === false) {
            /*console.log("liking it");
            console.log(likedStatus);
            console.log(post["post"]["_id"]);
            console.log(localStorage.getItem("userId"));*/
            likeEvent(localStorage.getItem("userId"), post["post"]["_id"])
            likeCount = likeCount + 1;

        }
        else if(likedStatus === true){
            /*console.log("disliking it");
            console.log(likedStatus);
            console.log(post["post"]["_id"]);
            console.log(localStorage.getItem("userId"));*/
            dislikeEvent(localStorage.getItem("userId"), post["post"]["_id"])
            likeCount = likeCount - 1;
        }
        /*window.location.reload(false)   */
    }
    console.log(post["post"]["eventName"] );
    console.log(likedStatus);
    console.log("Like Count");
    console.log(likeCount);
    return (
        <div>
            <div>
                <div className="w3-container w3-card w3-white w3-round w3-margin"><br/>
                    <span className="wap-float-right w3-right w3-opacity">{(new Date(post["post"]["postTime"])).toISOString().split("T")[0]}</span>
                    <div className="row">
                        <div className="col-2">
                            <img
                                src="https://cdn2.vectorstock.com/i/1000x1000/41/11/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg"
                                alt="Avatar" className="w3-left w3-circle w3-margin-right"
                                width="60px"/>
                        </div>

                        <div className="col-10">
                            <div className="row">

                                <h5 className="event-title" onClick={() => goToEventPage(post)}>{post["post"]["eventName"]}</h5><br/>

                            </div>
                            <div className="row">
                                <span className="type-meta">ORGANISER: {post["post"]["organiserName"]}</span>
                            </div>
                        </div>
                    </div>


                    <hr/>
                    <div className="w3-clear">
                        <div className="w3-row-padding me-16">
                            <img
                                src={post["post"]["image"]}
                                width="100%" alt="Northern Lights"
                                className="w3-margin-bottom"/>
                        </div>
                        <p className="ps-2">{post["post"]["shortDescription"]}</p>
                        <hr/>


                        <button type="button" onClick={likeClickHandler} className="wap-like-button w3-button w3-margin-bottom">
                            {/*{post["posts"]["likes"].toString()}*/}
                            {/*{
                                likedStatus ?  <i className="fa fa-thumbs-up wap-blue-thumb alert-primary"></i> :  <i className="fa fa-thumbs-up alert-danger"></i>
                            }*/}
                            <i className="fa fa-thumbs-up "  style={{color: likedStatus ? "red": "yellow"}}></i> {likeCount} Like
                        </button>
                        <button type="button" className="wap-attend-button w3-button w3-margin-bottom"><i
                            className="far fa-calendar-plus"></i> {post["post"]["likes"]} Attending
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )

}

export default FeedPostComponent;