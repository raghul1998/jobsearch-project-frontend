const USER_SEARCH_API = 'http://localhost:4000/api/user';

export const getPresentUser = (id) => {
    return(
        fetch(`${USER_SEARCH_API}/${id}`)
            .then(response => response.json()))
}


export default {
    getPresentUser
};