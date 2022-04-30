const Post = require('./models/post');

async function deletedata(req, res) {
    try {
        const id = req.params.id;
        await Post.findByIdAndDelete(id);
        console.log('刪除',id)
        res.json(JSON.stringify({
            "status": "success",
            "data": null
        }))
    } catch (err) {
        res.json({
            "status": "false",
            "message": "欄位不正確或沒有此ID",
            "error": JSON.stringify(err)
        });
    }
}

async function deleteAllData(req, res) {
    try {
        await Post.deleteMany({});
        console.log('刪除全部')
        res.json({
            "status": "success",
            "data": null
        })
    } catch (err) {
        res.json({
            "status": "false",
            "message": "欄位不正確或沒有此ID",
            "error": JSON.stringify(err)
        });
    }
}

module.exports = {deletedata, deleteAllData};