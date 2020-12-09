const templete = require('../controllers/tem_com.controller')

module.exports = (app) => {
    app.post('/templete/create',templete.create)
}