const mongoose = require('mongoose');
const room = require('./models/room')

function postdata(res, header, msg, body) {
    res.writeHead(200, header);
    console.log('更新資料庫');
    const name = JSON.parse(body).name;
    const price = JSON.parse(body).price;
    const rating = JSON.parse(body).rating;
    try {
        mongoose.connect('mongodb://localhost:27017/hotel')
            .then(() => {
                room.create({ 
                    name: name,
                    price: price,
                    rating: rating
                })
            }).then(() => {
                res.write('新增成功');
                res.end();
            })
    } catch (err) {
        res.write(err);
        console.log(err);
        res.end();
    }
}
module.exports = postdata;