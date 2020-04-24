const Article = require('../../model/article');
const formidable = require('formidable');
const path = require('path');
module.exports = (req, res) => {
    const id = req.query.id;
    //创建表单解析对象
    const form = new formidable.IncomingForm;
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
    form.keepExtensions = true;
    //解析表单
    form.parse(req, async (err, fields, files)=>{
        //更新数据
        await Article.updateOne({_id: id}, {
            title: fields.title,
            author: fields.author,
            publishDate: fields.publishDate,
            cover: files.cover.path.split('public')[1],
            content: fields.content
        })
        res.redirect('/admin/article');
    })
    //更新数据
//    await Article.updateOne({_id: id},
//     req.body);
}