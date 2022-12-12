import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
//const API_BASE = "http://localhost:4000";

const JOB_API = `${API_BASE}/event`;
const LATEST_POSTS_API = `${API_BASE}/latestposts`;


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