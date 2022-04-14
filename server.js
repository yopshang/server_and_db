const http = require('http');
const mongoose = require('mongoose');

const Room = require('./models/room');
const getdata =  require('./getdata');
const postdata = require('./postdata');

mongoose.connect('mongodb://localhost:27017/hotel')
    .then(()=>{
        console.log('資料庫連接成功');
    })
    .catch(err=>{
        console.log(err);
    })

const requestListener =  async (req, res) => {
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

    if (req.url == '/rooms' && req.method == 'GET') {
        console.log('good one');
        // getdata(res, headers);
        // try {
            console.log('good two');
            const rooms = await Room.find({});
            console.log('good 3');
            res.writeHead(200, headers);
            res.write(JSON.stringify({
                "status": "success",
                rooms
            }));
            res.end()
        // } catch (err) {
        //     res.writeHead(200, headers);
        //     console.log(err);
        //     res.end()
        // }
    } else if (req.method == 'POST') {
        req.on('end', () => {
            postdata(res, headers, '更新成功',body)
        })
    }else if(req.method == 'DELETE'){

    }


}
const server = http.createServer(requestListener)
server.listen(3005)