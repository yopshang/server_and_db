// const Room = require('./models/room')
const Post = require('./models/post');

function postdata(res, header, msg, body) {
    console.log('更新資料庫');
    const name = JSON.parse(body).name;
    const tags = JSON.parse(body).tags;
    const type = JSON.parse(body).type;
    const image = JSON.parse(body).image;
    const content = JSON.parse(body).content;
    const likes = JSON.parse(body).likes;
    const comments = JSON.parse(body).comments;
    try {
        res.writeHead(200, header);
        Post.create({ 
            name,
            tags,
            type,
            image,
            content,
            likes,
            comments
        }).then(() => {
            res.write('新增成功'); 
            res.end();
        })
    } catch (err) {
        res.writeHead(400, header);
        res.write({
            "status": "false",
            "message": "欄位不正確或沒有此ID",
            "error": err
        });
        console.log(err);
        res.end();
    }
}
module.exports = postdata;