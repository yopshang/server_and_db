// const mongoose = require('mongoose');
const Room = require('./models/room');

async function getdata(res, headers) {
    try {
        const rooms = await Room.find({});
        res.writeHead(200, headers);
        res.write(JSON.stringify({
            "status": "success",
            rooms
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