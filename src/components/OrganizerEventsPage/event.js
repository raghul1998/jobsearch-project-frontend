import React, {useEffect, useState} from "react";
import StudentPost from "../StudentPost";
import {fetchEventById} from "../../services/eventService";
import NewPost from "./NewPost";
import {Link, useNavigate} from "react-router-dom";





const getDay = (date) => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date(date);
    let dayName = days[d.getDay()];
    return dayName;

}

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

const Event = () => {

    const goToNewPostPage = () => {
        /*history.push("/event-new-post");*/
        <Link to="/event-new-post"></Link>
    }

    let navigate = useNavigate();

    const routeChange=()=> {
        let path = `/event-new-post`;
        navigate(path);
    }

    const [show,setShow] =useState(null);
    const [addPost, setAddPost] = useState(null);

    const eventId = localStorage.getItem('eventIdForEventPage');

    const [event,setEvent] =useState({title: ''});
    useEffect(() => {
        /*let eventId = localStorage.getItem('eventId').toString();
        *//*let eventId = '61b7b1c94e0281746dc23648';
        localStorage.setItem('test','61b7b1c94e0281746dc23648');
        */
        fetchEventById(eventId).then((event) => {
            setEvent(event);
        }).catch((error) => {
            setEvent(null);
        });
    }, [])


    return(
        <>
             <div className="section-block">
                 <div className="funding-meta">
                     <h1>{event["eventName"]}</h1>
                     <span className="type-meta"><i
                         className="fa fa-user"></i>{event["organiserName"]}</span>
                     {/*<span className="type-meta"><i className="fa fa-tag"></i> <a href="#">crowdfunding</a>,
                        <a href="#">launch</a> </span>*/}
                     <div className="video-frame">


                         {/*<p> src="https://player.vimeo.com/video/67938315" width="500" height="281" frameBorder="0"
                                webkitallowfullscreen mozallowfullscreen allowFullScreen></p>*/}
                         <img width="400" height="300" frameBorder="0" src={event["image"]}/>

                     </div>

                     <p className="wap-event-other-info pt-3">
                         <i className="fas fa-calendar-alt wap-icon pe-2 "/>
                         <a href="#">
                            <span className="wap-date">
                                    {getDay(event["dateOfEvent"])}&nbsp;
                                {getDate(event["dateOfEvent"])}&nbsp;
                                {getMonth(event["dateOfEvent"])}&nbsp;
                            </span>
                         </a>

                         <i className="fas fa-clock wap-icon pe-2 "/><span
                         className="wap-time"> {event["timeOfEvent"]} &nbsp;</span>
                         <i className="fas fa-map-marker-alt wap-icon pe-2"/><span
                         className="wap-location">{event["location"]}</span>
                     </p>

                     <p className="wap-desc pt-2">{event["shortDescription"]}</p>

                     <div>
                         {
                             show ? <>
                                      <p className="wap-desc pt-2">
                                          {event["longDescription"]}
                                      </p>
                                      <a className="wap-desc pt-2" onClick={() => setShow(false)}>Show
                                          Less</a>
                                  </>
                                  :
                             <a className="wap-desc pt-2" onClick={() => setShow(true)}>Show
                                 More</a>

                         }
                         {

                         }


                     </div>
                 </div>
             </div>

                <div className="section-block signup">
                    <div className="sign-up-form">
                        <form>
                            { localStorage.getItem('userRole') != 'organiser' &&
                            <div>
                                <p className="p">Share Post with fellow mates about the event</p>
                                <button className=" btn btn-primary wap-submit-btn mt-2" onClick={routeChange} type="submit">
                                    <i className="fas fa-plus-circle wap-add-icon me-2" ></i><span>Add Post</span>
                                </button>
                            </div>
                            }
                        </form>
                    </div>
                </div>


                            <div className="col-12 wap-border">
                                <div className="row">

                                        <StudentPost/>
                                </div>
                            </div>


            {/*  <i className="fas fa-chevron-left fa-2x mt-2 ms-4"></i>*/}
            {/*  <div className="row">
                <div className="col-6">
                    <img className="wd-image rounded" src="https://news.northeastern.edu/wp-content/uploads/2014/12/Gingerbread_010.jpg" />
                </div>
            </div>
          <div className="row">
                <div className="col-6">
                    <h1 className="wap-title">Northeastern Dining Gingerbread Construction Contest</h1>
                </div>
            </div>*/}

            {/* <div className="jumbotron jumbotron-fluid pt-2">
                <div className="container">
                    <img className="rounded" src="https://news.northeastern.edu/wp-content/uploads/2014/12/Gingerbread_010.jpg" />
                    <div className="caption">
                        <h2>SpaceX's Starship</h2>
                    </div>
                    <h1 className="wap-title text-decoration-underline mt-3">Northeastern Dining Gingerbread <br/> Construction Contest</h1>
                    <p className="lead">
                        <i className="fas fa-calendar-alt "></i> Thursday December 9th &nbsp;
                        <i className="fas fa-clock "></i> 13:00 - 17:00 &nbsp;
                        <i className="fas fa-map-marker-alt"></i> Ell Hall
                    </p>
                    <p className="lead">

                        Join us for our 21st annual Gingerbread Construction Contest! <br/>
                        • • •<br/>
                        Thursday December 9th<br/>
                        1:00 pm – 5:00 pm<br/>
                        Three 1 hour long session (1:00PM, 2:30PM, and 4:00PM)<br/>
                        West Village Tent<br/>
                        • • •<br/>
                        Maximum of two Northeastern students per team.<br/>
                        • • •<br/>
                        If chosen to participate, you will receive an email with additional event information, including your confirmed time slot. Please show confirmed email upon entry, you will not be able to come in without email confirmations<br/>
                        • • •<br/>
                        All University COVID safety procedures will be in effect for the duration of the event<br/>
                        parent.<br/>
                    </p>
                    <a href="#">Show More</a>
                </div>
            </div>*/}

                </>

    );
}

export default Event;