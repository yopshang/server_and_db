const Post = require('../models/post.js');


async function getdata(res) {
    try {
        const post = await Post.find({});
        res.status(200).json({
            "status": "success",
            post
        });
    } catch (err) {
        console.log(err);
        res.json({status: '資料取得錯誤'});
    }
}
module.exports = getdata;