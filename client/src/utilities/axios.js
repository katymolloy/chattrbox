import axios from 'axios';


export const createUser = (firstName, lastName, userName, email, password) => {
    axios.post('http://localhost:3001/register', { firstName, lastName, userName, email, password })
        .then((res) => {
            console.log('User sent to db', res)

        }).catch((err) => {
            console.log('Error writing user', err)
        })
}

export const signInUser = (email, password) => {
    return axios.post('http://localhost:3001/login', { email, password })
        .then((res) => {

            return res.data;
        })
        .catch((err) => {
            console.log('Error logging user in ', err);
            return err;
        })
}
