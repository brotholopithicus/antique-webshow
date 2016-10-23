const express = require('express');
const router = express.Router();
const geocoder = require('geocoder');

const Post = require('../models/Post');

router.route('/posts')
    .get((req, res) => {
        Post.find({}, (err, posts) => {
            if (err) throw err;
            res.json(posts);
        })
    })
    .post((req, res) => {
        let addressStr = `${req.body.address}, ${req.body.city}, ${req.body.state}`;
        geocoder.geocode(addressStr, (err, response) => {
            if (err) throw err;
            let location = response.results[0].geometry.location;
            let coords = {
                latitude: location.lat,
                longitude: location.lng
            }
            let newPostObject = {
                title: req.body.title,
                description: req.body.description,
                date: req.body.date,
                time: req.body.time,
                location: {
                    lat: coords.latitude,
                    lng: coords.longitude
                }
            }
            let post = new Post(newPostObject);
            console.log(post);
            post.save(err => {
                if (err) throw err;
                res.json({ message: 'post created!' });
            });
        });
    });

router.route('/posts/:id')
    .get((req, res) => {
        Post.findById(req.params.id, (err, post) => {
            if (err) throw err;
            res.json(post);
        })
    })
    .put((req, res) => {
        Post.findById(req.params.id, (err, post) => {
            if (err) throw err;
            let keys = Object.keys(req.body);
            keys.forEach(key => {
                post[key] = req.body[key];
            });
            post.save(err => {
                if (err) throw err;
                res.json(post);
            });
        })
    })
    .delete((req, res) => {
        Post.remove({ _id: req.params.id }, (err) => {
            if (err) throw err;
            res.json({ message: 'post deleted!' });
        });
    });
module.exports = router;
