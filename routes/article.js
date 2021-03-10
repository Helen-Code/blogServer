// 引入文档模型
const Article = require('../models/article')

const { successModel } = require('../util/util')

exports.getArticleList = (req, res) => {

	// new Article({
	// 	title: '请求成功了2',
	// 	content: '文章内容'
	// })
	// .save((err, ret) => {
	// 	if (err) {
	// 		console.log(err)
	// 	} else {
	// 		console.log('文章数据保存成功', ret)
	// 	}
	// })
	console.log('请求博客list')
	Article.find({})
		.then(ret => {
				console.log('查询文章list成功')
				console.log()
				successModel(res, ret)
		})
		.catch(err => {
			console.log('查询文章list失败')
			console.error('Error：', err)
		})
}