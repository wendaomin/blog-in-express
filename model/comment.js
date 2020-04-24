const mongoose = require('mongoose');
//创建集合规则
const commentSchame = new mongoose.Schema({
    //文章id
    aid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    },
    //作者 id
    uid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //评论时间
    time:{
        type: Date,
        default: Date.now
    },
    //评论内容
    content:{
        type: String
    }
});
//创建集合
const Comment = mongoose.model('Comment', commentSchame);

//添加数据
async function addComment(){
    await Comment.create({
        aid: '5e8c30c086bdcc08ac385c1e',
        uid: '5e81d831b8681e02a49aae16',
        content: '问君能有几多愁，恰似一江春水向东流！'
    });
}
// addComment();
module.exports = Comment;