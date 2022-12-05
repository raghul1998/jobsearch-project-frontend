import React from "react";
import {dislikeEvent, likeEvent} from "../../../services/eventService";

const PostStats = (post) => {
    let likedStatus = false;
    let likeCount = post["post"]["likes"];
    console.log("Like By")
    console.log(post["post"]["likedBy"]);
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
    return(
        <div>
            <button type="button" onClick={likeClickHandler} className="wap-like-button w3-button w3-margin-bottom">
                {/*{post["posts"]["likes"].toString()}*/}
                {/*{
                                likedStatus ?  <i className="fa fa-thumbs-up wap-blue-thumb alert-primary"></i> :  <i className="fa fa-thumbs-up alert-danger"></i>
                            }*/}
                <i className="fa fa-thumbs-up "  style={{color: likedStatus ? "red": "yellow"}}></i> {likeCount} || {post["post"]["likes"]} Like
            </button>
            <button type="button" className="wap-attend-button w3-button w3-margin-bottom">
                <i className="far fa-calendar-plus"></i> {post["post"]["likes"]} Attending
            </button>

        </div>
    );
}
export default PostStats;