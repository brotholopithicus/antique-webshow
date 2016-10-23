const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.route('/')
    // get all users
    .get((req, res) => {
        User.find({}, (err, users) => {
            if (err) throw err;
            res.json(users);
        })
    })
    // create a new user
    .post((req, res) => {})

router.route('/:id')
    // get single user by id
    .get((req, res) => {})
    // edit single user by id
    .put((req, res) => {})
    // delete single user by id
    .delete((req, res) => {})

module.exports = router;
