const http = require('http');
const mongoose = require('mongoose');

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