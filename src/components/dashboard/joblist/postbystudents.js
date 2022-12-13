import React, {useEffect, useState} from "react";
import "./postbystudents.css"
import {getPost} from "../../../service/studentJobShareService"
import PostByStudentsMain from "./postbystudentsmain";

const PostByStudents = () => {
    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        async function getData() {
            const data = await getPost();
            setJobs(data);
        }
        getData();
    }, [])

    return (
        <>
            {
                localStorage.getItem('userRole') === 'organiser' &&
                <div>
                    <h3 className="text-white" style={{textAlign: "center"}}>
                        Below are the posts shared by students about this job
                    </h3>
                </div>
            }

            {
                jobs != null &&
                <div>
                    {
                        jobs.map(job => <PostByStudentsMain key={job['_id']} job={job}/>)
                    }
                </div>
            }
        </>
    )
}

export default PostByStudents;