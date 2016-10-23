const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    date: { type: Date, required: true },
    time: { type: String },
    updated: { type: Date, default: Date.now() },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, requied: true }
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;

/* TO BE ADDED
address: { type: String },
tags: [{ text: { type: String } }]
*/
