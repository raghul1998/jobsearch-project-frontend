/*
const EVENT_API = 'https://whatsappening-backend.herokuapp.com/post';
*/


const LOCALHOST = 'http://localhost:4000';

const EVENT_API = `${LOCALHOST}/post`;

export const createPost = (newEvent) =>{
    return(
        fetch(EVENT_API, {
            method: 'POST',
            body: JSON.stringify(newEvent),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json()))
}

export const getAllPosts = () => {
    return (
        fetch(EVENT_API).then(response => response.json())
    )
}


export const fetchPostById = (id) =>
    fetch(`${EVENT_API}/${id}/fetch`)
        .then(response => response.json());


export default {
    createPost, getAllPosts, fetchPostById
};