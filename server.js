const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
var bodyParser = require('body-parser')

const post = require('./routes/post')

dotenv.config({path:"./config.env"})
const dburl = process.env.DBURL;
const db_varified = dburl.replace(
    '<password>', process.env.DBPASSWORD
    )

// mongoose.connect('mongodb://localhost:27017/IG')
mongoose.connect(db_varified)
    .then(()=>{
        console.log('資料庫連接成功');
    })
    .catch(err=>{
        console.log(err);
    })

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/posts', post)
app.listen(process.env.PORT || 3005)