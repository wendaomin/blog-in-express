const {User}  = require('../../model/user');
const bcrypt = require('bcryptjs'); 
module.exports = async (req, res) =>{
   const {email, password} = req.body;
    if(email.trim().length == 0 || password.trim().length ==0) return res.status(400).render('admin/error', {msg: '密码或者邮箱错误'});
    const user = await User.findOne({email:email});
    if(user){
        let isVaild = bcrypt.compare(password, user.password);
        if(isVaild){
            req.app.locals.userInfo = user;
            req.session.role = user.role;
            req.session.usename = user.useName;
            if(user.role == 'admin'){            
                res.redirect('/admin/user');
                // res.send('111');
                // console.log('123');
                
            }else{
                res.redirect('/home/login')
            }
        }else{
            res.send('该用户不存在')
        }
    }else{
        res.send('该用户不存在')
    }
}