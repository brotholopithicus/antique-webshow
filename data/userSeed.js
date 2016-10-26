const faker = require('faker');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pickers-webapp');

const User = require('../models/User');
const NUM_SEED_USERS = 5;

let users = [];

for (let i = 0; i < NUM_SEED_USERS; i++) {
    let newUserObject = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    let user = new User(newUserObject);
    user.encryptPassword();
    user.save((err, user) => {
        if (err) throw err;
        console.log('user saved', user.name);
    });
}
