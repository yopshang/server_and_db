const Post = require('./models/post');

async function getdata(res) {
    try {
        const post = await Post.find({});
        res.status(200).json(JSON.stringify({
            "status": "success",
            post
        }));
    } catch (err) {
        console.log(err);
        res.json('資料取得錯誤');
    }
}
module.exports = getdata;