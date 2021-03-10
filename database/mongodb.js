// 这里连接数据库 
const mongoose = require('mongoose')
const { MONGODB_URL , MONGODB_CONF} = require('../datebase.conf')
// mongoose.connect('mongodb://localhost/test')

// 连接数据库,传入配置的信息
console.log('当前数据库配置',MONGODB_URL, MONGODB_CONF)
mongoose.connect( MONGODB_URL, MONGODB_CONF )

// 连接错误
mongoose.connection.on('error', error => {
	console.log('数据库连接失败!', error)
})
// 连接成功
mongoose.connection.once('open', () => {
	console.log('数据库连接成功!')
})

module.exports = mongoose
