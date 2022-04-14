// const mongoose = require('mongoose');
const Rooms = require('./models/room');

async function getdata(res, headers) {
    try {
        console.log('good');
        const rooms_data = await Rooms.find();
        res.writeHead(200, headers);
        res.write(JSON.stringify({
            "status": "success",
            rooms_data
        }));
        res.end()
    } catch (err) {
        res.writeHead(200, headers);
        console.log(err);
        res.end()
    }
    // res.end();
}
module.exports = getdata;