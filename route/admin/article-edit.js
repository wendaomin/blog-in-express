module.exports = (req, res) => {
    const { id } = req.query;
    if(id){
        res.render('admin/article-edit', {
            link: '/admin/article-edit-fn?id=' + id ,
            button: '修改'
        });
    }else{
        res.render('admin/article-edit', {
            link: '/admin/article-publish',
            button: '发布'
        });
    }
}