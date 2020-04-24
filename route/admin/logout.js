module.exports = (req, res) =>{
    req.session.destroy(function(){
        res.clearCookie('connect.sid' ,{path: '/'});
        req.app.locals.userInfo = null;
        return res.redirect('/admin/login');
    })
}