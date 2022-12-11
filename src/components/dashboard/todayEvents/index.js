import React, {useEffect, useState} from "react";
import {getAllEvents} from "../../../service/eventService";
import NewEvent from "./newEvent";

const TodaysEventList = () => {
    let d = new Date();
    d.setDate(d.getDate());

    const [posts, setPosts] = useState(null);
    // useEffect(() => {
    //     getAllEvents().then((events) => {
    //         setPosts(events);
    //     }).catch((error) => {
    //         setPosts(null);
    //     });
    // },[])

    // useEffect(() =>  {
    //     getAllEvents()
    //         .then(posts => setPosts(posts))
    //         .catch((error) => {
    //             console.log("Error")
    //         })
    // }, []);
    return (
        <>
            <h3 className="text-white">Today's Events</h3>
          { posts!=null &&
            posts.map(post =>
                <div>
                    { ((d.toISOString().split("T"))[0]) === ((new Date(post["postTime"])).toISOString().split("T"))[0] &&
                    <NewEvent post={post}/>
                    }

                </div>

            )
            }
        </>
    );
}

export default TodaysEventList;