const http = require('http');
const mongoose = require('mongoose');

// 建立 Schema

// 建立 Model

// 連線資料庫
mongoose.connect('mongodb://localhost:27017/hotel').then(()=>{
    console.log('uauaua');
}).catch((err)=>{
    console.log(err.reason);
});

const requestListener = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});

    res.write("good");
    res.end() 
}
const server = http.createServer(requestListener)
server.listen(3005)