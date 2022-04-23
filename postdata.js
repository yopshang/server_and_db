const Post = require('./models/post');

function postdata(res, header, msg, body) {
    const name = JSON.parse(body).name;
    const tags = JSON.parse(body).tags;
    const type = JSON.parse(body).type;
    const image = JSON.parse(body).image;
    const content = JSON.parse(body).content;
    const likes = JSON.parse(body).likes;
    const comments = JSON.parse(body).comments;
    try {
        Post.create({ 
            name,
            tags,
            type,
            image,
            content,
            likes,
            comments
        }).then(() => {
            res.send('新增成功'); 
        })
    } catch (err) {
        res.send({
            "status": "false",
            "message": "欄位不正確或沒有此ID",
            "error": err
        });
    }
}
module.exports = postdata;