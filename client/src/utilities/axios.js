import axios from 'axios';


export const createUser = (firstName, lastName, email, password) => {
   return axios.post('http://localhost:3001/register', { firstName, lastName,  email, password })
        .then((res) => {
            console.log('User sent to db', res)
            return res.data

        }).catch((err) => {
            console.log('Error writing user', err)
            return err
        })
}

export const signInUser = (email, password) => {
    return axios.post('http://localhost:3001/login', { email, password })
        .then((res) => {
            console.log(res)
            return res.data;
        })
        .catch((err) => {
            console.log('Error logging user in ', err);
            return err;
        })
}

