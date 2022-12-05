/*const EVENT_API = 'https://whatsappening-backend.herokuapp.com/event';
const LATEST_POSTS_API = 'https://whatsappening-backend.herokuapp.com/latestposts';*/

const LOCALHOST = 'http://localhost:4000';

const EVENT_API = `${LOCALHOST}/event`;
const LATEST_POSTS_API = `${LOCALHOST}/latestposts`;

export const createEvent = (newEvent) =>{
    return(
        fetch(EVENT_API, {
            method: 'POST',
            body: JSON.stringify(newEvent),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json()))
}

export const getAllEvents = () => {
    return (
        fetch(EVENT_API).then(response => response.json())
    )
}

export const searchEvents = (keyword) => {
    return(
        fetch(`${EVENT_API}/${keyword}`)
            .then(response => response.json()))
}

export  const likeEvent = (uid,eid) => {
    return(
        fetch(`${EVENT_API}/${uid}/${eid}/like`)
            .then(response => response.json()))

}
export  const dislikeEvent = (uid,eid) => {
    return (
        fetch(`${EVENT_API}/${uid}/${eid}/dislike`)
            .then(response => response.json()))
}


export const getLatestPosts = () => {
    return (
        fetch(LATEST_POSTS_API).then(response => response.json())
    )
}


export const fetchEventById = (id) =>
    fetch(`${EVENT_API}/${id}/fetch`)
        .then(response => response.json());


export default {
    createEvent, getAllEvents, searchEvents, fetchEventById, getLatestPosts, likeEvent, dislikeEvent
};