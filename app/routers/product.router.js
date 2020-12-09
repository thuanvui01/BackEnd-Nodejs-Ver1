module.exports = (app) =>{
    const product = require('../controllers/product.controller')
   //hiển thị danh sách product 30/10/2020 
    app.get('/products',product.findAll)
   //Tạo product 30/10/2020 
    app.post('/createproduct',product.create)
   //Update danh sách product 30/10/2020 
    app.put('/updateproduct/:id',product.findIdUpdate)
   //Update Status product 10/10/2020
    app.put('/updateStatusProduct/:id',product.updateStatusProduct)
   //Xóa product 30/10/2020
    app.delete('/deleteproduct/:id',product.findProductIDandDelete)
   //Find products by id
    app.get('/findproduct/:id',product.findid)

}