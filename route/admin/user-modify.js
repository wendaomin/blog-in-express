//修改用户信息
const {User} = require('../../model/user');
const bcrypt = require('bcryptjs');
module.exports = async (req, res) =>{
    //此修改要进行密码比对
    //比对成功，跳到用户页面
    //比对失败，返回错误信息
    console.log(req.query);
    
    let {usename, email, password, state, role} = req.body;
    const id = req.query.id;
    //查找该用户的信息
    const user = await User.findOne({_id:id});
    const isValid = await bcrypt.compare(password, user.password);
    if(isValid){
        await User.updateOne({_id:id},
            req.body);
        res.redirect('/admin/user');
    }else{
        res.render('admin/error', {msg: '密码比对失败'})
    }
}