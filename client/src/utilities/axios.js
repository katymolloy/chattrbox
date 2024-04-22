import axios from 'axios';

export const createUser = (firstName, lastName, email, password) =>{
axios.post('http://localhost:3001/register', {firstName, lastName, email, password})
.then((res) =>{
console.log('User sent to db', res)
}).catch((err) =>{
    console.log('Error writing user', err)
})
}