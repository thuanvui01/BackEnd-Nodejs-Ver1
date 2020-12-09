module.exports = (app) => {
    const cate_info = require('../controllers/cate-info.controller')
    const cate_industry = require('../controllers/cate-industry.controller')

    app.post('/cateinfo',cate_info.create)
    app.get('/cateinfo',cate_info.findAll)

    app.post('/cateindustry',cate_industry.create)
    app.get('/cateindustry',cate_industry.findAll)
}