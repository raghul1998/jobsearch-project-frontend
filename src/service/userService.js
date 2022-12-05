const CREATE_USER_API = '';

export const setUpProfile = (profile) => {

    return(
        fetch(CREATE_USER_API, {
            method: 'POST',
            body: JSON.stringify(profile),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json()))
}

export default setUpProfile;