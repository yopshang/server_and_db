// const Room = require('./models/room');
const Post = require('./models/post');

async function getdata(res, headers) {
    try {
        const post = await Post.find({});
        res.writeHead(200, headers);
        res.write(JSON.stringify({
            "status": "success",
            post
        }));
        res.end()
    } catch (err) {
        res.writeHead(200, headers);
        console.log(err);
        res.end()
    }
}
module.exports = getdata;