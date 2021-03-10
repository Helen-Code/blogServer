const express = require('express')
const route = require('./routes/index') // 引入路由文件

// 构建express服务器
const app = express()
// 配置
app.use(express.json()); // post请求参数JSON格式 req.body获取
app.use(express.urlencoded({ extended: false })); //类似表单提交参数获取

app.all('*',function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	// res.header("X-Powered","3.2.1");
	res.header("Content-Type","application/json;charset=utf-8");
	next();
});

// 初始化所有路由
route(app)

app.listen('3000', () => {
	console.log('服务器已启动')
})

