const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Room = require('./models/room');
const getdata =  require('./getdata');
const postdata = require('./postdata');

dotenv.config({path:"./config.env"})
const dburl = process.env.DBURL;
const db_varified = dburl.replace(
    '<password>', process.env.DBPASSWORD
    )

// mongoose.connect('mongodb://localhost:27017/hotel')
mongoose.connect(db_varified)
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
        getdata(res, headers);
    } else if ( req.url =='/rooms' && req.method == 'POST') {
        req.on('end', () => {
            postdata(res, headers, '更新成功',body)
        })
    }else if(req.url =='/rooms' && req.method == 'DELETE'){

    }


}
const server = http.createServer(requestListener)
server.listen(process.env.PORT || 3005)