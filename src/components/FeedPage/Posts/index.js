import React, {useEffect, useState} from "react";
import {getAllEvents} from '../../../services/eventService';
import {getAllUsers} from '../../../services/profileService';
import './index.css';
import FeedPostComponent from "./FeedPostComponent";
import {searchEvents} from "../../../services/eventService";
import SearchComponent from "./SearchComponent";

const Posts = () => {
    const [posts, setPosts] = useState(null);
    const [users, setUsers] = useState(null);
    const [searchString, setSearchString] = useState('');

    useEffect(() => {
        getAllEvents().then((events) => {
            setPosts(events);
        }).catch((error) => {
            setPosts(null);
        });

        getAllUsers().then((users) => {
            setUsers(users);
        }).catch((error) => {
            setUsers(null);
        });
    }, [])

    useEffect(() => {
        if (searchString == '') {
            getAllEvents().then((events) => {
                setPosts(events);
            }).catch((error) => {
                setPosts(null);
            });
        } else {
            searchEvents(searchString).then((events) => {
                setPosts(events);
            }).catch((error) => {
                setPosts(null);
            });
        }
    }, [searchString])

    return(
        <>
            {posts != null &&
            <div>
                {/*<div className="row">
                    <div className="w3-w3-cardcol m12">
                        <div className=" w3-round w3-white">
                            <div className="w3-container w3-padding">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="input-group wd-search">
                                                <span className="input-group-text"><i className="fas fa-search"></i></span>
                                                <input value={searchString} type="text" className="form-control" placeholder="Search Post" onChange={(e) => setSearchString(e.target.value)}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>*/}
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <div className="input-group mb-3"><input type="text" className="form-control input-text"
                                                                     placeholder="Search Post...."
                                                                     aria-label="Recipient's username"
                                                                     aria-describedby="basic-addon2"
                                                                     value={searchString}
                                                                     onChange={(e) => setSearchString(e.target.value)}
                            />
                                <div className="input-group-append">
                                    <button className="btn btn-primary btn-lg" type="button">
                                        <i className="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>


                {/*<div className="row">*/}
                {/*    <div className="dropdown mt-2">*/}
                {/*        <select className="wap-dropdown" name="cars" id="cars">*/}
                {/*            <option value="">Sort By</option>*/}
                {/*            <option value="time">Time</option>*/}
                {/*            <option value="date">Date</option>*/}
                {/*            <option value="location">Location</option>*/}
                {/*        </select>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <ul className="list-group">
                    {
                        posts.map(post =>
                            <div>
                                <FeedPostComponent post={post}/>
                            </div>

                            // <div>
                            //     <div className="w3-container w3-card w3-white w3-round w3-margin"><br/>
                            //         <span className="wap-float-right w3-right w3-opacity">1 min</span>
                            //         <div className="row">
                            //             <div className="col-2">
                            //                 <img
                            //                     src="https://cdn2.vectorstock.com/i/1000x1000/41/11/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg"
                            //                     alt="Avatar" className="w3-left w3-circle w3-margin-right"
                            //                     width="60px"/>
                            //             </div>
                            //
                            //             <div className="col-10">
                            //                 <div className="row">
                            //
                            //                     <h5>{post["eventName"]}</h5><br/>
                            //
                            //                 </div>
                            //                 <div className="row">
                            //                     <span className="type-meta"><i className="fa fa-user"></i> Jonathan Doe</span>
                            //                 </div>
                            //             </div>
                            //             <div className="col2">
                            //
                            //             </div>
                            //         </div>
                            //
                            //
                            //         <hr/>
                            //         <div className="w3-clear">
                            //             <div className="w3-row-padding me-16">
                            //                 <img
                            //                     src={post["image"]}
                            //                     width="100%" alt="Northern Lights"
                            //                     className="w3-margin-bottom"/>
                            //             </div>
                            //             <p className="ps-2">{post["shortDescription"]}</p>
                            //             <hr/>
                            //             <button type="button" className="wap-like-button w3-button w3-margin-bottom">
                            //                 <i className="fa fa-thumbs-up"></i> Like
                            //             </button>
                            //             <button type="button" className="wap-attend-button w3-button w3-margin-bottom"><i
                            //                 className="far fa-calendar-plus"></i> Attending
                            //             </button>
                            //         </div>
                            //     </div>
                            // </div>
                        )
                    }
                </ul>
            </div>
            }
        </>
    );
}
export default Posts;
