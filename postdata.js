const Post = require('./models/post');

async function postdata(req, res) {
    const body = req.body;
    const name = body.name;
    const tags = body.tags;
    const type = body.type;
    const image = body.image;
    const content = body.content;
    const likes = body.likes;
    const comments = body.comments;
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
            res.json('新增成功'); 
        })
    } catch (err) {
        res.json({
            "status": "false",
            "message": "欄位不正確或沒有此ID",
            "error": err
        });
    }
}
module.exports = postdata;