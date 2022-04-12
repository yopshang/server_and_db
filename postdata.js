const mongoose = require('mongoose');


// 建立 Schema
const roomschema = {
    name: String,
    price: {
        type: Number,
        default: 3000
    },
    rating: {
        type: Number,
        default: 4.0
    }
}
// 建立 Model
const user = mongoose.model('rooms', roomschema);



function postdata(res, header, msg, body) {
    res.writeHead(200, header);
    // console.log(res)
    console.log('更新資料庫');
    const name = JSON.parse(body).name;
    const price = JSON.parse(body).price;
    const rating = JSON.parse(body).rating;
    try {
        mongoose.connect('mongodb://localhost:27017/hotel')
            .then(() => {
                let user_data = new user(
                        { 
                            name: name,
                            price: price,
                            rating: rating
                        }
                    )
                user_data.save()
            }).then(() => {
                res.write('新增成功');
            })
    } catch (err) {
        console.log(err);
    }
    res.end();
}
module.exports = postdata;