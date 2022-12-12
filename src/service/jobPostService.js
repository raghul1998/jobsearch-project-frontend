import axios from 'axios';

const LOCALHOST = 'http://localhost:4000';
const JOB_API = `${LOCALHOST}/event`;
const LATEST_POSTS_API = 'http://localhost:4000/latestposts';


export const createJob = async (job) => {
    const response = await axios.post(JOB_API, job);
    return response.data;
}

export const getAllJob = async () => {
    const response = await axios.get(JOB_API);
    return response.data;
}

export const searchJob = async (filter) => {
    const response = await axios.get(`${JOB_API}/${filter}`);
    return response.data;
}

export const getJobByID = async (id) => {
    const response = await axios.get(`${JOB_API}/${id}/fetch`);
    return response.data;
}

export  const applyJob = (uid, eid) => {
    return(
        fetch(`${JOB_API}/${uid}/${eid}/apply`)
            .then(response => response.json()))

}
export  const unapplyJob = (uid, eid) => {
    return (
        fetch(`${JOB_API}/${uid}/${eid}/unapply`)
            .then(response => response.json()))
}

export const getLatestPosts = () => {
    return (
        fetch(LATEST_POSTS_API).then(response => response.json())
    )
}