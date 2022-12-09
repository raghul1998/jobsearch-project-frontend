import axios from 'axios';

const CREATE_USER_API = 'http://localhost:4000/api/user';

export const setUpProfile = async (profile) => {
    const response = await axios.post(CREATE_USER_API, profile)
    return response.data;
}


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