const Post = require('./models/post');

async function getdata(res, headers) {
    try {
        const post = await Post.find({});
        res.send(JSON.stringify({
            "status": "success",
            post
        }));
    } catch (err) {
        console.log(err);
        res.send('資料取得錯誤');
    }
}
module.exports = getdata;