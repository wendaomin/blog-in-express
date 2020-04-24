const Article = require('../../model/article');
module.exports = async (req, res) =>{
    //获取文章id
    // let id = req.body.id;
    // res.send(req.body.id);
    let id = req.query.id;
    await Article.deleteOne({_id: id});
    res.redirect('/admin/article');
}