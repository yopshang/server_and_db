const http = require('http');
const mongoose = require('mongoose');

const getdata = require('./getdata');
const postdata = require('./postdata');

// 建立 Schema
const schema = {
    name: String,
    price: {
        type: Number,
        default: 3000,
        require: [true, '價格必填']
    },
    rating: Number
}

// 建立 Model
const Room = mongoose.model('Room', schema);


// 連線資料庫
// mongoose.connect('mongodb://localhost:27017/hotel').then(() => {
//     console.log('uauaua');
// }).catch((err) => {
//     console.log(err.reason);
// });


// 建立 headers
const headers = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-Width',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATH, POST, GET, OPTIONS, DELETE',
    'Contnet-Type': 'application/json'
}
let body = "";

const requestListener = (req, res) => {
    req.on('data', chunk => {
        body += chunk;
    })

    if (req.method == 'GET') {
        // getdata(res, header, '成功');
        res.writeHead(200, headers);

        res.write("取得資料");
        res.end()
    } else if (res.method == 'POST') {
        res.on('end', () => {
            postdata(res, header, '更新',body)
        })
    }

  
}
const server = http.createServer(requestListener)
server.listen(3005)