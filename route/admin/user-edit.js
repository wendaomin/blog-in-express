const {User} = require('../../model/user');
module.exports = async (req, res) =>{
   let { id, message } = req.query;
    if(id){
        let user = await User.findOne({_id: id});
        res.render('admin/user-edit', {
            link: '/admin/user-modify?id=' + id,
			button: '修改',
            user: user
        });
    }else{
        res.render('admin/user-edit', {
            link: '/admin/user-edit', 
            button: '添加',
            message
        })
    }
}