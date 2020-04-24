const Article = require('../../model/article');
const formidable = require('formidable');
const path = require('path');
module.exports = (req, res) => {
    //创建解析表单对象
    const form = new formidable.IncomingForm();
    //配置文件上传的位置
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
    //保留文件上传后缀
    form.keepExtensions = true;
    //解析表单
    form.parse(req, async(err, fields, files) =>{
        //err 解析错误时存储的信息， 成功解析，为null
        //fields 其中为解析后的普通表单数据
        //files 其中为解析后的上传文件数据
       await Article.create({
            title: fields.title,
            author: fields.author,
            publishDate: fields.publishDate,
            cover: files.cover.path.split('public')[1],
            content: fields.content
        });
        // 将页面重定向到文章列表页面
		res.redirect('/admin/article');
    })
        
}