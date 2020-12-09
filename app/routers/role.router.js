module.exports = (app) =>{
    const role = require('../controllers/role.controller')
    app.post('/role/create',role.create)

    app.get('/role/:name',role.getdata)

}