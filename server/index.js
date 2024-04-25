const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const User = require('./models/user');
const bcrypt = require('bcryptjs')




const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://katymolloy:Evillesbian1!@chattrbox.treivmc.mongodb.net/chattrbox?retryWrites=true&w=majority', {
    dbName: 'chattrbox'
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));




app.post('/register', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    // checking if user exists
    const emailExists = await User.find({ email: email });
    // if email exists already, user is notified
    if (emailExists.length > 0) {
        return res.status(500).json({ message: 'Email is already in use' })
    }

    let hashedPassword = await bcrypt.hash(password, bcrypt.genSaltSync(10))

    const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
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

})



app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email })

    if (!user) {
        console.log('no user found')
        return res.status(401).json({ error: 'No user found.' });
    }

    bcrypt.compare(password, user.password, (bcryptErr, isMatch) => {
        if (bcryptErr) {
            // Handle bcrypt error
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (!isMatch) {
            // Passwords do not match
            return res.status(401).json({ error: 'Invalid Password' });
        }


        return res.status(200).json({ message: 'Login successful' });
    });
})





const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('Server is running')
})