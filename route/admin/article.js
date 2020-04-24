const Article = require('../../model/article');
module.exports = async (req, res) => {
    //标识当前是文章页面
    req.app.locals.currentLink = 'article';
    //总数据
    const count = await Article.countDocuments({});
    //当前页
    const page = req.query.page || 1;
    const pageSize = 2;
    //总页数
    const total = Math.ceil(count / pageSize);
    let data = (page - 1) * pageSize;
    let articles = await Article.find({}).limit(pageSize).skip(data).populate('author').exec();
    res.render('admin/article', 
    {
        articles: articles,
        total: total,
        page: page
    }
    )
}