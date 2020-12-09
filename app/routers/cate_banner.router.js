module.exports = (app) => {
    const cate_banner = require('../controllers/cate-banner.controller')

    app.post('/catebanner',cate_banner.create)
    app.get('/catebanner',cate_banner.findAll)
}
