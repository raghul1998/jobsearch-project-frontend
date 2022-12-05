import React, {useEffect, useState} from "react";
import {getAllEvents, searchEvents} from "../../../services/eventService";
import {getAllUsers} from "../../../services/profileService";
import FeedPostComponent from "./FeedPostComponent";
import NewPostComponent from "./newPostComponent";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
import NavigationBar from "../NavigationBar";

const NewPost = () =>{



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

            <div className="row mt-3">
                <div className="col-md-12">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control input-text"
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

            <ul className="list-group">
                {
                    posts.map(post =>

                            <NewPostComponent post={post}/>

                    )}
            </ul>
                </div>
            }
        </>
    );
}
export default NewPost;