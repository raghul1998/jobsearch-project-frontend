const PROFILE_API = 'https://whatsappening-backend.herokuapp.com/register/user';
const LOGIN_API = 'https://whatsappening-backend.herokuapp.com/login/user'
const USER_SEARCH_API = 'https://whatsappening-backend.herokuapp.com/user';
const ALL_USERS_API = 'https://whatsappening-backend.herokuapp.com/user';

export const createUser = (newUser) => {
    
    
    return(
    fetch(PROFILE_API, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json()))
}

export const loginUser = (email, password) => {
    return(
        fetch(`${LOGIN_API}/${email}/${password}`)
            .then(response => response.json()))
}

export const getPresentUser = (id) => {
    return(
        fetch(`${USER_SEARCH_API}/${id}`)
            .then(response => response.json()))
}

export const getAllUsers = () => {
    return(
        fetch(ALL_USERS_API)
            .then(response => response.json())
    )
}

export const updateUser = (id, user) => {
    return(
        fetch(`${PROFILE_API}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    )
}

export default {
    createUser, loginUser, getPresentUser, getAllUsers, updateUser
};