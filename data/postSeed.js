const faker = require('faker');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pickers-webapp');
const Post = require('../models/Post');
const NUM_SEED_POSTS = 20;
let posts = [];

for (let i = 0; i < NUM_SEED_POSTS; i++) {
    let desc = [];
    for (let j = 0; j < 5; j++) {
        desc.push(faker.hacker.phrase());
    }
    let d = desc.join(' ');
    let newPost = {
        title: faker.commerce.productName(),
        description: d,
        date: faker.date.future(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state()
        },
        location: {
            lat: faker.address.latitude(),
            lng: faker.address.longitude()
        },
        image: faker.random.image()

    }
    let post = new Post(newPost);
    post.save(err => {
        if (err) throw err;
        console.log('saved');
    });
}
