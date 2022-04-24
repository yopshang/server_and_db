const Post = require('./models/post');

async function deletedata(req, res) {
    try {
        const id = req.params.id;
        await Post.findByIdAndDelete(id);
        console.log('刪除',id)
        res.send(JSON.stringify({
            "status": "success",
            "data": null
        }))
    } catch (err) {
        res.send({
            "status": "false",
            "message": "欄位不正確或沒有此ID",
            "error": JSON.stringify(err)
        });
    }
}
module.exports = deletedata;