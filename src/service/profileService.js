const API_BASE = process.env.REACT_APP_API_BASE;
const USER_SEARCH_API = `${API_BASE}/api/user`;

export const getPresentUser = (id) => {
    return(
        fetch(`${USER_SEARCH_API}/${id}`)
            .then(response => response.json()))
}


export default {
    getPresentUser
};