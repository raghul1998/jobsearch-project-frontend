import axios from "axios";
//const API_BASE = process.env.REACT_APP_API_BASE;
const API_BASE = "http://localhost:4000";

const POST_API = `${API_BASE}/post`;

export const createPost = async (job) => {
    const resp = await axios.post(POST_API, job);
    return resp.data;
}

export const getPost = async () => {
    const resp = await axios.get(POST_API);
    return resp.data;
}
