const mongoose = require('mongoose');

// 建立 Schema
const postschema = new mongoose.Schema(
    {
        name: String,
        price: {
            type: Number,
        },
        rating: {
            type: Number,
        }
    },
    {
        versionKey: false,
    }
)
// 建立 Model
const Post = mongoose.model('Post', postschema);
module.exports = Post;