import React, {useEffect, useState} from "react";
import {getAllEvents} from "../../../services/eventService";
import TodaysEvent from "./TodaysEvent";
import FeedPostComponent from "../Posts/FeedPostComponent";
import NewEvent from "./newEvent";

const TodaysEventList = () => {
    let d = new Date();
    d.setDate(d.getDate());

    const [posts, setPosts] = useState(null);
    useEffect(() => {
        getAllEvents().then((events) => {
            setPosts(events);
        }).catch((error) => {
            setPosts(null);
        });
    },[])

    useEffect(() =>  {
        getAllEvents()
            .then(posts => setPosts(posts))
            .catch((error) => {
                console.log("Error")
            })
    }, []);

    // useEffect(() => {
    //     console.log("posts", posts)
    // }, [posts])


    // console.log("Here");
    // console.log(posts);
    return (
        <>
            <h3 className="text-white">Today's Events</h3>
          { posts!=null &&
            posts.map(post =>
                <div>
                    { ((d.toISOString().split("T"))[0]) === ((new Date(post["postTime"])).toISOString().split("T"))[0] &&
                    /*<TodaysEvent post={post}/>*/
                    <NewEvent post={post}/>
                    }

                </div>

            )
            }
        </>
    );
}

export default TodaysEventList;