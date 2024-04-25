import axios from 'axios';


export const createUser = (firstName, lastName, email, password) => {
   return axios.post('http://localhost:3001/register', { firstName, lastName,  email, password })
        .then((res) => {
            return res.data

        }).catch((err) => {
            return err
        })
}

export const signInUser = (email, password) => {
    return axios.post('http://localhost:3001/login', { email, password })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
             return err;
        })
}

