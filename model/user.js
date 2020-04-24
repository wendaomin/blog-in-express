const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
//引入joi模块
const Joi = require('joi');
const userSchame = new mongoose.Schema({
    usename:{
        type:String,
        required:true,
        minlength:2,
        maxlength:10
    },
	email: {
		type: String,
		// 保证邮箱地址在插入数据库时不重复
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	// admin 超级管理员
	// normal 普通用户
	role: {
		type: String,
		required: true
	},
	// 0 启用状态
	// 1 禁用状态
	state: {
		type: Number,
		default: 0
	}
});
//创建集合
const User = mongoose.model('User', userSchame);

async function createUser(){
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('123456', salt);
    User.create({
        usename: 'lcm',
        email: '333@qq.com',
        password: pass,
        role: 'normal',
        state: 0
    });
}
// // //验证方法
// const validateUser = user => {
// 	//定义验证规则
// 	const schame = {
// 		usename: Joi.string().min(2).max(10).required.error(new Error('名字长度不符合要求')),
// 		email: Joi.string().email().required().error(new Error('邮箱不符合规则')),
// 		password: Joi.string().regex(/^[a-zA-Z0-9]{3, 12}$/).required().error(new Error('密码不符合要求')),
// 		role: Joi.string().valid('normal', 'admin').required().error(new Error('角色不符合要求')),
// 		state: Joi.number().valid(0, 1).required().error(new Error('状态不符合要求'))
// 	};
// 	return Joi.validate(user, schame);
// }
const validateUser = user => {
	// 定义对象的验证规则
	const schema = {
		usename: Joi.string().min(2).max(12).required().error(new Error('用户名不符合验证规则')),
		email: Joi.string().email().required().error(new Error('邮箱格式不符合要求')),
		password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合要求')),
		role: Joi.string().valid('normal', 'admin').required().error(new Error('角色值非法')),
		state: Joi.number().valid(0, 1).required().error(new Error('状态值非法'))
	};

	// 实施验证
	return Joi.validate(user, schema);
}

// createUser();
module.exports = {
	User,
	validateUser
}
