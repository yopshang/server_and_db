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
        collation: 'rooms'
    }
)
// 建立 Model
const room = mongoose.model('rooms', roomschema);
module.exports = room;