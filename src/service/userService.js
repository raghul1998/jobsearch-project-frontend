import axios from "axios";
const CREATE_USER_API = "https://node-backend-career-genie.onrender.com/api/user";

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
