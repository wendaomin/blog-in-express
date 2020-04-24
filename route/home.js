const express = require('express');
const home = express.Router();
//进入首页
home.get('/login', require('./home/index'));
//进入登录页面
home.get('/logout', require('./home/logout'));
//进入一个测试页面
home.get('/test', require('./home/test'));
//进入文章详情页面
home.get('/article', require('./home/article'));
//进行添加评论功能
home.post('/add-comment', require('./home/add-comment'));
module.exports = home;