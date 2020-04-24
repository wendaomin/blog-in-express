const Comment = require('../../model/comment');
module.exports = async (req, res) => {
    let id = req.body.aid;
    await Comment.create(req.body);
    res.redirect(`/home/article?id=${id}`);
}