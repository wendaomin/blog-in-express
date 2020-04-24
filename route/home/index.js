const Article = require('../../model/article');
const Pagination = require('mongoose-sex-page');
module.exports = async (req, res) =>{
    const page = req.query.page || 1;
    const result = await Pagination(Article).page(page).size(4).display(4).find({}).populate('author').exec();
    res.render('home/default', { result });
}