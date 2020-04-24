// 新增用户功能

// 先查询数据内有无此用户，有则添加，否则报错
// 将密码进行加密
// 添加用户到数据库
// 跳转页面到用户列表
const {User, validateUser} = require('../../model/user');
const bcrypt = require('bcryptjs');
module.exports = async (req, res, next) =>{
    console.log(req.body);
    console.dir(req.body);
    let email = req.body.email;
    //验证表单格式
    try{
        await validateUser(req.body);
    }catch(e){
        return next(JSON.stringify({path: '/admin/user-edit', message: e.message}));
    }
    const user = await User.findOne({email: email});
    if (user) {
         //报错
         return next(JSON.stringify({path: '/admin/user-edit', message: '邮箱地址已经被占用'}));
    }
       //弄格式，添加数据
       let salt = await bcrypt.genSalt(10);
       let password = await bcrypt.hash(req.body.password, salt);
       req.body.password = password;
       await User.create(req.body);
       res.redirect('/admin/user');
}
