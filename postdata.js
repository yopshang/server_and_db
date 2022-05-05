const Post = require('./models/post');

async function postdata(req, res) {
    const name = req.name;
    const tags = req.tags;
    const type = req.type;
    const image = req.image;
    const content = req.content;
    const likes = req.likes;
    const comments = req.comments;
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