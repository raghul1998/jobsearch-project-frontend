import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getAllUsers} from "../../../services/profileService";
import {dislikeEvent, likeEvent} from "../../../services/eventService";
import "./newPost.css";
const NewPostComponent = (post) => {
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
    let likedStatus = false;
    let likeCount = post["post"]["likes"];
    for (let i=0;i<post["post"]["likedBy"].length;i++){
        if(post["post"]["likedBy"][i] === localStorage.getItem("userId")){
            likedStatus = true;
        }
    }
    function likeClickHandler() {

        /* console.log("At Start");
         console.log(likedStatus);*/

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
        window.location.reload(false)
    }
    console.log(post["post"]["eventName"] );
    console.log(likedStatus);
    console.log("Like Count");
    console.log(likeCount);
    return(
        <>
                <div className="card col-12">
                    <div className="d-flex justify-content-between p-2 px-3">
                        <div className="d-flex flex-row align-items-center"><img
                            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/northeastern-huskies-logo-red-veles.jpg"
                            width="50" className="rounded-circle"/>
                            <div className="d-flex flex-column ml-2">
                                <span className=" text-primary font-weight-bold ps-2" onClick={() => goToEventPage(post)}>
                                    {post["post"]["eventName"]}
                                </span>
                                <small className="ps-2">{post["post"]["organiserName"]}</small></div>
                        </div>
                        <div className="d-flex flex-row mt-1 ellipsis"><small className="mr-2">{(new Date(post["post"]["postTime"])).toISOString().split("T")[0]}</small>
                            </div>
                    </div>
                    <img src={post["post"]["image"]} className="img-fluid"/>
                    <div className="p-2">
                        <p className="text-justify">{post["post"]["shortDescription"]}</p>
                        <hr/>
                        <div className="d-flex justify-content-between align-items-center">

                            <div className="d-flex flex-row icons d-flex align-items-center">
                                <i className="fa fa-heart" onClick={likeClickHandler}
                                   style={{color: likedStatus ? "red": "gray"}}/>
                            </div>
                            <div className="d-flex flex-row muted-color"><span>{likeCount} Likes</span></div>
                        </div>
                        <hr/>

                    </div>
                </div>
            <br/>

        </>
    );

}
export default NewPostComponent;