const http = require('http');
const mongoose = require('mongoose');

// const getdata = require('./getdata');
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

const requestListener = (req, res) => {
    // 建立 headers
    const headers = {
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-Width',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'PATH, POST, GET, OPTIONS, DELETE',
        'Contnet-Type': 'application/json'
    }
    let body = "";
    req.on('data', chunk => {
        body += chunk;
    })

    if (req.method == 'GET') {
        // getdata(res, header, '成功');
        res.writeHead(200, headers);
        res.write("取得資料");
        res.end()
    } else if (req.method == 'POST') {
        req.on('end', () => {
            postdata(res, headers, '更新成功',body)
        })
    }else if(req.method == 'DELETE'){
        
    }


}
const server = http.createServer(requestListener)
server.listen(3005)