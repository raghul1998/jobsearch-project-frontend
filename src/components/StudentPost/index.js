import React, {useEffect, useState} from "react";
import "./studentpost.css"
import {fetchEventById, getAllPosts} from "../../services/postService";

const getMonth = (date) => {
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct','Nov','Dec'];
    let d = new Date(date);
    let mon = month[d.getMonth()];
    return mon;


}
const getDate = (date) => {
    let date1 = new Date(date);
    let month = date1.getUTCMonth() + 1; //months from 1-12
    let day = date1.getUTCDate();
    let year = date1.getUTCFullYear();
    return day;
}


const StudentPost = () => {
    const eventIdForEventPage = localStorage.getItem('eventIdForEventPage');

    const [events,setEvents] =useState(null);
    useEffect(() => {
        /*let eventId = localStorage.getItem('eventId').toString();
        *//*let eventId = '61b7b1c94e0281746dc23648';
        localStorage.setItem('test','61b7b1c94e0281746dc23648');
        */
        /*let eventId = localStorage.getItem('eventIdForEventPage').toString();*/
        getAllPosts().then((event) => {
            setEvents(event);
            /*if(this.eventId.toString() === ('61b7b1c94e0281746dc23648')) {
                setEvent(event);
            }*/
        }).catch((error) => {
            setEvents(null);
        });
    }, [])


    return(
        <div>
            {events!=null &&
                <div>
                    {events.map((event) =>{
                        return(
                            <div>
                                {event["eventId"] === eventIdForEventPage &&
                                 <div>
                                     <div className="card mt-4">
                                         <div className="card-body">
                                             <div className="media mb-3">
                                                 <div className="row">
                                                     <div className="col-3">
                                                         <img

                                                             src={event["profileImage"]}

                                                             className="d-block ui-w-40 rounded-circle" alt=""/>
                                                     </div>
                                                     <div className="col-8">
                                                         <div className="media-body">
                                                             {event["firstName"]}&nbsp;
                                                             {event["lastName"]}&nbsp;
                                                             <div className="text-muted small">{getDate(
                                                                 event["postTime"])}&nbsp;
                                                                 {getMonth(event["postTime"])}&nbsp;
                                                             </div>
                                                         </div>

                                                     </div>

                                                 </div>


                                             </div>
                                             <img className="ui-rect ui-bg-cover"
                                                  src={event["image"]}/>

                                             <p>
                                                 {event["shortDescription"]}
                                             </p>
                                         </div>
                                     </div>

                                 </div>

                                }
                            </div>
                        )


                    })}
                </div>
            }

        </div>
    );
}
export default StudentPost;