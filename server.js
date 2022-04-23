const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const app = express();

const Room = require('./models/room')
const Post = require('./models/post');
const getdata =  require('./getdata');
const postdata = require('./postdata');

dotenv.config({path:"./config.env"})
const dburl = process.env.DBURL;
const db_varified = dburl.replace(
    '<password>', process.env.DBPASSWORD
    )

mongoose.connect('mongodb://localhost:27017/IG')
// mongoose.connect(db_varified)
    .then(()=>{
        console.log('資料庫連接成功');
    })
    .catch(err=>{
        console.log(err);
    })

    const headers = {
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-Width',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'PATH, POST, GET, OPTIONS, DELETE',
        'Contnet-Type': 'application/json'
    }
const requestListener =  async (req, res) => {
    // 建立 headers
    let body = "";
    
    req.on('data', chunk=>{
        body+=chunk;
    })

    if (req.url == '/rooms' && req.method == 'GET') {
        getdata(res, headers);
    } else if ( req.url =='/rooms' && req.method == 'POST') {
        req.on('end', () => {
            postdata(res, headers, '更新成功',body)
        })
    }else if(req.url.startsWith('/rooms/') && req.method == 'DELETE'){
        const id = req.url.split('/').pop();
        console.log(id);
        await Post.findByIdAndDelete(id);
        console.log('刪除')
        res.writeHead(200, headers);
        res.write(JSON.stringify({
            "status": "success",
            "data": null
        }))
        res.end();
    }


}

async function returnBody(req){
    let body = "";

    await req.on('data', chunk=>{
        body+=chunk;
    })
    return body;
}


app.get('/posts', (req, res) => {
    getdata(res, headers);
})
app.post('/posts', async (req, res) => {
    let body = await returnBody(req);;
    postdata(res, headers, '更新成功',body);
})
app.delete('/posts', async (req, res) => {

})


app.listen(process.env.PORT || 3005)