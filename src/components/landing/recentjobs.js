import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getLatestPosts} from "../../service/eventService";
import RecentJobMap from "./recentjobmap";

const RecentJobs = () => {
    const [jobs, setJobs] = new useState(null);

    useEffect(() => {
        async function getData() {
            const jobs = await getLatestPosts();
            setJobs(jobs);
        }
        getData();
    }, [])

    return (
        <>
            {
                jobs != null &&
                <div className="tab-content row justify-content-center">
                    <div role="panel" className="col-lg-9 tab-pane fade show active" id="jobRole">
                        {
                            jobs.map(job => <RecentJobMap key={job['_id']} job={job}/>)
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default RecentJobs;