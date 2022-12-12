const USER_SEARCH_API = 'https://node-backend-career-genie.onrender.com/api/user';

export const getPresentUser = (id) => {
    return(
        fetch(`${USER_SEARCH_API}/${id}`)
            .then(response => response.json()))
}


export default {
    getPresentUser
};