const {User} = require('../../model/user');
module.exports = async (req, res) => {
    //从地址栏获取id值
    let id = req.query.id;
    //删除对应的用户文档
    await User.deleteOne({_id: id});
    res.redirect('/admin/user');
}