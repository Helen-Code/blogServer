const env = process.env.NODE_ENV //环境参数

// 配置
let MONGODB_CONF
let MONGODB_URL
let REDIS_CONF

if (env === 'dev') {
	MONGODB_CONF = {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
	MONGODB_URL = 'mongodb://127.0.0.1:27017'

	REDIS_CONF = {
		host: '127.0.0.1',
		port: '6379'
	}
}

if (env === 'production') {
  MONGODB_CONF = {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
	MONGODB_URL = 'mongodb://127.0.0.1:27017'

	REDIS_CONF = {
		host: '127.0.0.1',
		port: '6379'
	}
}
module.exports = {
	MONGODB_CONF,
	MONGODB_URL,
	REDIS_CONF
}