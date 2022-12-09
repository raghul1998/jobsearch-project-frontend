import axios from 'axios';

const LOCALHOST = 'http://localhost:4000';
const JOB_API = `${LOCALHOST}/event`;

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