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
    console.log(res)
    
    const title = JSON.parse(body).title;
    try {
        mongoose.connect('mongodb://localhost:27017/hotel')
            .then(() => {
                let user_data = new user({ name: title })
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