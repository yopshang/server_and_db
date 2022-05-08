const mongoose = require('mongoose');

// 建立 Schema
const postschema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '請輸入姓名']
        },
        tags: {
            type: Array,
            default: []
        },
        type: {
            type: String,
            default:''
        },
        image: {
            type: String,
            default:''
        },
        content: {
            type: String,
            require: [true, '請輸入貼文內容']
        },
        likes: {
            type: Number,
            default: 0
        },
        comments: {
            type: Number,
            default: ''
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