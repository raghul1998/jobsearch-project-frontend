import React, {useEffect, useState} from "react";
import {getAllJob, searchJob} from "../../../service/jobPostService";
import PostMapComponent from "./postmap";
import {get} from "axios";

const JobListsPost = () => {
    let [posts, setPosts] = useState([]);
    let [search, setSearch] = useState('');

    useEffect(() => {
        async function getData() {
            const jobs = await getAllJob();
            setPosts(jobs);
        }
        getData();
    }, [])

    useEffect(() => {
        async function getData() {
            if (search === '') {
                const jobs = await getAllJob();
                setPosts(jobs);
            } else {
                const filteredJobs = await searchJob(search);
                setPosts(filteredJobs);
            }
        }
        getData();
    }, [search])

    return (
        <>
            {
                posts != null &&
                <div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <div className="input-group mb-3">
                                <input className="ps-5 form-control rounded-pill"
                                       placeholder="Search Jobs"
                                       value={search}
                                       onChange={(evt) => setSearch(evt.target.value)}
                                />
                                <span className="position-absolute wd-search-tuiter">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <ul className="list-group">
                        {
                            posts.map(post => <PostMapComponent key={post['_id']} post={post}/>)
                        }
                    </ul>
                </div>
            }
        </>
    );
}

export default JobListsPost;