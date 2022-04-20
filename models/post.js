const mongoose = require('mongoose');

// 建立 Schema
const postschema = new mongoose.Schema(
    {
        name: String,
        tags: {
            type: String,
        },
        type: {
            type: String,
        },
        image: {
            type: String
        },
        content: {
            type: String
        },
        likes: {
            type: Number,
        },
        comments: {
            type: Number,
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
// 建立 Model
const Post = mongoose.model('Post', postschema);
module.exports = Post;