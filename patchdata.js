const Post = require('./models/post');

function returnSet(body){
    let result={}
    if(body.name){
        result.name = body.name;
    }
    if(body.type) {
        result.type = body.type;
    }
    if(body.image){
        result.image = body.image;
    }
    if(body.content){
        result.content = body.content;
    }
    if(body.likes){
        result.likes = body.likes;
    }
    if(body.comments){
        result.comments = body.comments;
    }
    if(body.tags){
        result.tags = body.tags;
    }
    return result;
}

async function patchdata (req, res, id){
    try{
        if(!req.body){
            res.status.json("資料遺失");
        } else if(!id){
            res.json("無此id")
        } else {
            await Post.updateOne(
                {
                    _id: id
                },
                {
                    $set: returnSet(req.body)
                }
            )
            res.status(200).json("更新成功");
        }

    }catch(err){
        res.json({
            "status": "false",
            "message": "欄位不正確或沒有此ID",
            "error": JSON.stringify(err)
        });
    }
}

module.exports = patchdata;
