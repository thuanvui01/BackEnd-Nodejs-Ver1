module.exports = (app) => {
    const cate_information = require('../controllers/cate_information')

    app.post('/cateinformation',cate_information.create)
    app.get('/cateinformation',cate_information.findAll)
}
