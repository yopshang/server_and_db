const mongoose = require('mongoose');

// 建立 Schema
const roomschema = new mongoose.Schema(
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
const Room = mongoose.model('Room', roomschema);
module.exports = Room;