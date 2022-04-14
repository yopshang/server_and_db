const mongoose = require('mongoose');


// 建立 Schema
const roomschema = new mongoose.Schema(
    {
        name: String,
        price: {
            type: Number,
            default: 3000
        },
        rating: {
            type: Number,
            default: 4.0
        }
    },
    {
        versionKey: false,
    }
)
// 建立 Model
const Room = mongoose.model('Room', roomschema);
module.exports = Room;