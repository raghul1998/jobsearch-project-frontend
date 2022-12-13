import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
//const API_BASE = "http://localhost:4000";

const CREATE_USER_API = `${API_BASE}/api/user`;

export const setUpProfile = async (profile) => {
  const response = await axios.post(CREATE_USER_API, profile);
  return response.data;
};

// export const setUpProfile = (profile) => {
//
//     return(
//         fetch(CREATE_USER_API, {
//             method: 'POST',
//             body: JSON.stringify(profile),
//             headers: {
//                 'content-type': 'application/json'
//             }
//         }).then(response => response.json()))
// }

export default setUpProfile;
