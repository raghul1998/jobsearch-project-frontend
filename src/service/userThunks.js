import * as service from "./userService.js"

export const CREATE_USER = 'CREATE_USER';
const NEW_USER_API = "http://localhost:4000/api/user/"


export const createUser = (newUser) => {

    console.log("user" + String(newUser))
    return(
        fetch(NEW_USER_API, {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json()))
}