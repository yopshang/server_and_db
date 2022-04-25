const Post = require('./models/post');

function returnSet(body_obj){
    let result={}
    if(body_obj.name){
        result.name = body_obj.name;
    }
    if(body_obj.type) {
        result.type = body_obj.type;
    }
    if(body_obj.image){
        result.image = body_obj.image;
    }
    if(body_obj.content){
        result.content = body_obj.content;
    }
    if(body_obj.likes){
        result.likes = body_obj.likes;
    }
    if(body_obj.comments){
        result.comments = body_obj.comments;
    }
    if(body_obj.tags){
        result.tags = body_obj.tags;
    }
    return result;
}

async function patchdata (res, id , body){
    try{
        if(!body){
            console.log('body', body);
            res.status.send("資料遺失");
        } else if(!id){
            res.send("無此id")
        } else {
            const body_obj = JSON.parse(body);
            // console.log(id, body_obj)
            await Post.updateOne(
                {
                    _id: id
                },
                {
                    $set: returnSet(body_obj)
                }
            )
            res.status(200).send("更新成功");
        }

    }catch(err){
        res.send({
            "status": "false",
            "message": "欄位不正確或沒有此ID",
            "error": err
        });
    }
}

module.exports = patchdata;
