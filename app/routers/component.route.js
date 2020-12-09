const component = require('../controllers/component.controller')

module.exports = (app) => {
    app.post('/component/create',component.create);

    app.get('/component/showComponent/:pageID',component.showComByPageID)
}