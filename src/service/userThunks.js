import * as service from "./userService.js";

export const CREATE_USER = "CREATE_USER";
export const LOGIN_USER = "LOGIN_USER";
const NEW_USER_API = "https://node-backend-career-genie.onrender.com/api/user/";
const LOGIN_USER_API = "https://node-backend-career-genie.onrender.com/api/user/login";
const UPDATE_USER_API = "https://node-backend-career-genie.onrender.com/api/register/user";

export const createUser = (newUser) => {
  console.log("user" + String(newUser));
  return fetch(NEW_USER_API, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
};

export const loginUser = (email, password) => {
  console.log("email" + String(email) + "password" + String(password));
  return fetch(`${LOGIN_USER_API}/${email}/${password}`).then((response) =>
    response.json()
  );
};

export const updateUser = (id, user) => {
  return fetch(`${UPDATE_USER_API}/${id}`, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
};
