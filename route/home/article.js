const Article = require('../../model/article');
const Comment = require('../../model/comment');
module.exports = async (req, res) => {
    //根据传递过来的id查询文章
    let id = req.query.id;
    const article = await Article.findOne({_id: id}).populate('aid').exec(); 
    //根据文章id 查找评论
    const comments = await Comment.find({aid: id}).populate('uid').exec();
    
    // res.send(comments)
    res.render('home/article', {
        article, 
        comments
    });
}