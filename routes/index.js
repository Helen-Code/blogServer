/**
* 所有的路由接口
*/ 
const article = require('./article')

module.exports = app => {
	app.get('/getArticleList', article.getArticleList)
}