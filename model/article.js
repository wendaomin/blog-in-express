const mongoose = require('mongoose');

//创建文章集合规则
const articleSchema = new mongoose.Schema({
    title:{
        type: String,
        minLength: 4,
        maxLength: 20,
        required: [true, '请添加标题']
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, '请添加作者']
    },
    publishDate: {
        type: Date,
		default: Date.now
    },
    cover: {
        type: String,
        default: null
    },
    content: {
		type: String
	}
});
//创建集合
const Article = mongoose.model('Article', articleSchema);
//添加数据
// async function addArticle(){
//     await Article.create({
//         title: '第七章',
//         author: '5e81d831b8681e02a49aae16',
//         content: '屠龙宝刀称霸天下，倚天不出谁与争锋'
//     });
// }
// // addArticle();
// console.log('添加文章成功');
module.exports = Article;
