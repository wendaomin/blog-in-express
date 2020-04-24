//引入express框架
const express = require('express');
//创建网站服务器
const app = express();
//导入path
const path = require('path');
//引入body-parse
const bodyParse = require('body-parser');
//导入模板引擎
const template = require('art-template');
//引入时间格式
const dateFormat = require('dateformat');
//连接数据库
require('./model/connect');
//引入路由模块
const admin = require('./route/admin');
const home = require('./route/home');
//引入session模块
const session = require('express-session');
//告诉express 服务器 框架 模板所在的位置
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'art');
app.engine('art', require('express-art-template'));
//向模板内部导入变量
template.defaults.imports.dateFormat = dateFormat;

//开放静态资源
app.use(express.static(path.join(__dirname, 'public')));
//解析post请求参数 
app.use(bodyParse.urlencoded({extended:false}));
//配置session
app.use(session({
	resave: false, //添加 resave 选项
	secret: 'secret key',
	saveUninitialized: false,
	cookie: {
		maxAge: 24 * 60 * 60 * 1000
	}
}));
//拦截请求，判断用户是否登录状态
app.use('/admin', require('./middleware/loginGuard'));
app.use('/admin', admin);
app.use('/home',  home);
app.use((err, req, res, next) => {
	// 将字符串对象转换为对象类型
	// JSON.parse() 
	const result = JSON.parse(err);
	// {path: '/admin/user-edit', message: '密码比对失败,不能进行用户信息的修改', id: id}
	let params = [];
	for (let attr in result) {
		if (attr != 'path') {
			params.push(attr + '=' + result[attr]);
		}
	}
	console.log(params[0]);
	return res.redirect(`${result.path}?${params.join('&')}`);
})

app.listen(80);
console.log('网站服务器启动成功了');
