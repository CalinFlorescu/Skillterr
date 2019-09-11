const express = require('express');
const bodyParser  = require('body-parser');
const path = require('path');
const database = require('./config/database');
const User = require('./models/userModel');

const app = express();

app.get('/', (req, res) => {
    // database.authenticate()
    //     .then(() => {
    //         console.log('Connection has been established successfully.');
    //     })
    //     .catch(err => {
    //         console.log('Unable to connect to the database:', err);
    //     });
    // res.send('Started');

    User.create({first_name: 'Calin', email: 'calinflorescu3@gmail.com', username: 'Agronum', last_name: 'Florescu',
    gender: 'M', city: 'Cluj Napoca', state: 'Cluj', country: 'Romania', date_created: '2019-09-10',
    active: 'no', activation_key: 'asda', salt_value: 'fred', hashcode_value: '1234', availability: '3h'});
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));