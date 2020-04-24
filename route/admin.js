const express = require('express');
const admin = express.Router();
admin.get('/login', require('./admin/loginPage'));

admin.post('/login', require('./admin/login'));

admin.get('/user', require('./admin/userPage'));

admin.get('/logout', require('./admin/logout'));

admin.get('/user-edit', require('./admin/user-edit'));

admin.post('/user-modify', require('./admin/user-modify'));
//添加用户
admin.post('/user-edit', require('./admin/user-edit-fn'));
//删除用户
admin.get('/delete', require('./admin/delete'));

//文章管理页面
admin.get('/article', require('./admin/article'));
admin.get('/article-edit', require('./admin/article-edit'));
//新增文章功能实现
admin.post('/article-edit-fn', require('./admin/article-edit-fn'));
admin.post('/article-publish', require('./admin/article-publish'));
//删除文章
admin.get('/article-delete', require('./admin/article-delete'));
module.exports = admin;