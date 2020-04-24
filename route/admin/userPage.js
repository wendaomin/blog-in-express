const {User} = require('../../model/user');

module.exports = async (req, res) => {
    //当前页码
    let page = req.query.page || 1;
    // 标识 标识当前访问的是用户管理页面
    req.app.locals.currentLink = 'user';
    //每页显示的数据
    let pageSize = 4;
    //总数据
    let count = await User.estimatedDocumentCount();
    //总页数
    let total = Math.ceil(count / pageSize);
    //跳过数据
    let data = (page - 1) * pageSize;
    let users = await User.find({}).limit(pageSize).skip(data);
    res.render('admin/user',{
        users: users,
		page: page,
		total: total
    });
}