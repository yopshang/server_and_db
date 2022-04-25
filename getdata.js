const Post = require('./models/post');

async function getdata(res) {
    try {
        const post = await Post.find({});
        res.status(200).send(JSON.stringify({
            "status": "success",
            post
        }));
    } catch (err) {
        console.log(err);
        res.send('資料取得錯誤');
    }
}
module.exports = getdata;