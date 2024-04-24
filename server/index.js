const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const User = require('./models/user');


const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://katymolloy:Evillesbian1!@chattrbox.treivmc.mongodb.net/chattrbox?retryWrites=true&w=majority', {
    dbName: 'chattrbox'
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));


app.post('/register', async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: 'Request body is missing' });
    }

    const { firstName, lastName, email, password } = req.body;
    const emailExists = await User.find({ email: email });

    if (emailExists.length > 0) {
        return res.status(500).json({ message: 'Email is already in use' })
    } else {
        const newUser = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        })
        await newUser.save()
            .then(user => {
                if (!user) {
                    return res.status(400).json({ message: 'Failed to create user' });
                }
                return res.status(200).json({ message: 'User created' })
            })
            .catch(err => {
                console.error('Error creating user:', err);
                res.status(500).json({ message: 'Internal Server Error' });
            });
    }
})



app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    await User.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ response: 'User is now logged in', fname: user.firstName, user: user.userName })
                } else {
                    res.json('Incorrect password')
                }
            } else {
                res.json('No user found')
            }
        })
})




const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('Server is running')
})