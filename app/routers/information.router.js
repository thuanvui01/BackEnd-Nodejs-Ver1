module.exports = (app) => {
    const information = require('../controllers/information.controller')

    app.post('/createinformation',information.create)

    app.get('/information/:cate_informationID',information.findAll)

    app.put('/information/oderup',information.oderup)

    app.put('/information/oderdown',information.oderdown)

    app.delete('/deleteinformation',information.findbyCateIDandDelete)

    app.put('/updateinformation/:id',information.findIdUpdate)
    
    app.put('/statusinformation/:id',information.updateStatusInformation)
}
