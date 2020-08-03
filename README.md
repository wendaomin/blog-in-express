# blog-in-express
使用 express mongodb javascript 构建的简单博客网站
# blog 1.0 网站

### 1.博客项目功能

本项目分为博客管理功能和博客展示功能
### 2.文件介绍

public 静态资源 

model 数据库操作

route 路由

views 模板

### 3.开发工具

express框架、 MongoDB 、 nodejs、PowerShell、PowerShell

### 4.初始化

#### 1.需要第三方模块(主要)

express、mongoose、art-tempalte、express-art-template

#### 2.安装模块包

##### 2.1全局模块

bcrypt的依赖环境

1.python 2.X

2.node-gyp  

npm install -g node-gyp

3.windows-build-tools

npm install --global --production window-build-tools

##### 2.1项目内模块

npm install     //根据项目内package.jsion 一键安装所需要的模块，该模块文件安装到项目内。

### 5.注意事项

1.bcrypt 模块不能安装时, 可以使用bcryptjs替换，本项目中就是使用bcryptjs
