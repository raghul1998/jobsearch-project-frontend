const EVENT_API = 'http://localhost:4000/event';
const LATEST_POSTS_API = 'http://localhost:4000/latestposts';

export const createEvent = (newEvent) => {
    return (
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
    return (
        fetch(`${EVENT_API}/${keyword}`)
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
    createEvent, getAllEvents, searchEvents, fetchEventById, getLatestPosts
};