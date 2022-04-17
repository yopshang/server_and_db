const Room = require('./models/room')

function postdata(res, header, msg, body) {
    console.log('更新資料庫');
    const name = JSON.parse(body).name;
    const price = JSON.parse(body).price;
    const rating = JSON.parse(body).rating;
    try {
        res.writeHead(200, header);
        Room.create({ 
            name: name,
            price: price,
            rating: rating
        }).then(() => {
            res.write('新增成功');
            res.end();
        })
    } catch (err) {
        res.writeHead(400, header);
        res.write({
            "status": "false",
            "message": "欄位不正確或沒有此ID",
            "error": err
        });
        console.log(err);
        res.end();
    }
}
module.exports = postdata;