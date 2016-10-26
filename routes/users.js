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
    });

// create a new user
router.post('/signup', (req, res) => {
    let newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    let user = new User(newUser);
    user.encryptPassword();
    user.save((err) => res.json({ message: err }));
    req.session.user = user;
});
router.post('/login', (req, res, next) => {
    let candidate = req.body.password;
    User.find({ email: req.body.email }, (err, user) => {
        if (err) return next(err);
        user.comparePassword(candidate, (err, result) => {
            if (err) return next(err);
            if (result) {
                req.session.user = user;
            }
            next();
        });
    });
});

router.route('/:id')
    // get single user by id
    .get((req, res) => {})
    // edit single user by id
    .put((req, res) => {})
    // delete single user by id
    .delete((req, res) => {})

module.exports = router;
