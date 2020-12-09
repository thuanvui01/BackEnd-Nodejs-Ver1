module.exports = (app) => {
    const banner = require('../controllers/banner.controller')

    app.post('/createbanner',banner.create)

    app.get('/banner/:categoryID',banner.findAll)

    app.put('/banner/oderup',banner.oderup)

    app.put('/banner/oderdown',banner.oderdown)

    app.delete('/deletebanner',banner.findbyCateIDandDelete)

    app.put('/updatebanner/:id',banner.findIdUpdate)
    
    app.put('/statusbanner/:id',banner.updateStatusBanner)
}
