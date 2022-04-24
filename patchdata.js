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
    return result;
}
async function checkIfIdExist(){

}

async function patchdata (req, res , body){
    try{
        let body_obj = JSON.parse(body);
        const id = req.params.id;
        await Post.updateOne({
            "id": `ObjectId('${id}')`
        },{
            $set:{
                name : body_obj.name,
                type : body_obj.type,
                image : body_obj.image,
                content : body_obj.content,
                likes : body_obj.likes,
                comments : body_obj.comments
            }
        })
        res.send("更新成功");

    }catch(err){
        res.send({
            "status": "false",
            "message": "欄位不正確或沒有此ID",
            "error": err
        });
    }
}

module.exports = patchdata;
