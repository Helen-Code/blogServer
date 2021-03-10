module.exports = {
	successModel(res, data) {
		let response = {}
		response.code = 0
		response.message = "请求成功"
		response.data = data
		res.setHeader('Content-type', 'application/json') // 设置响应头
		res.status(200).json(response)
	},
	failModel(res, httpCode = 500, code = 3, message = "服务端异常", data = {}) {
		
	}
}