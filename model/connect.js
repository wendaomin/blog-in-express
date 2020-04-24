const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/newBlog', { useUnifiedTopology: true, useNewUrlParser: true})
    .then(()=>{console.log('数据库连接成功')})
    .catch(()=>{console.log('数据库连接失败')})