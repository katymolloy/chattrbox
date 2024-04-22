const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const UserModel = require('./models/user')

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://katymolloy:Evillesbian1!@chattrbox.treivmc.mongodb.net/chattrbox?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    dbName: 'chattrbox'
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));


app.post('/register', (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: 'Request body is missing' });
    }

    UserModel.create(req.body)
        .then(user => {
            if (!user) {
                return res.status(400).json({ message: 'Failed to create user' });
            }
            res.json(user);
        })
        .catch(err => {
            console.error('Error creating user:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        });
})


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('Server is running')
})