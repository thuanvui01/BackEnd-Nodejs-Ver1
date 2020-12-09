const Product = require('../models/product.model')
const formidable = require('formidable')
const mv = require('mv')
const logger = require('../../log')
const Log = require('../models/log.model')
const logService = require('../services/log.services');

//post("/createproduct") Tạo mới một product
// Create by Quang Thuận

exports.create = async(req,res)=>{
    let form = new formidable.IncomingForm();
    form.multiples = true;
        form.parse(req, async(err,fields,files)=>{
        try{      
            let imagepath = `images/products/${files.imagesFile.name}`
            fields.imagesFile = imagepath
            form.uploadDir = "uploads/products/"
            let tmpPath = files.imagesFile.path;
            let newPath = form.uploadDir + files.imagesFile.name;
            mv(tmpPath,newPath,(err)=>{
                if(err) logService.log_save('5',err,'Products')
            })
            let product = new Product(fields)
            await product.save()
            res.status(200).send("create product success")
            await Product.findByIdAndUpdate(product.id,
                {
                    $push : {
                        product_history: [{
                            userID:fields.userID,
                            action : "CREATE",
                            actionName : 'Tạo product thành công', 
                        }]
                    }
                })
        }catch(err)
        {
            res.status(400).send("error to create products")
            await logService.log_save('5',err,'Products')
        } 
    })
}

//get('/products') Hiển thị danh sách sản phẩm
// Create by Quang Thuận

exports.findAll = async(req,res)=>{
    let product = await Product.find()
    if(!product) {
        return res.status(404).send("Product not found")
    }
    console.log("Dang goi API find list product");
    res.status(200).send(product)  
}
//delete('/deleteproduct') tìm và xóa sản phẩm
// Create by Quang Thuận

exports.findProductIDandDelete = async(req,res)=>{
    try{
    let product = await Product.deleteMany(req.body)
    if(!product){
        logger.error("delete product not success")
        return res.status(400).send("error delete products")
    }
    let log = new Log({
        "content" : `Delete success product ${product.name}`,
        "level":"1"
    })
    await log.save()
     res.status(200).send("delete complete")  
    // logger.info(`find success banner`)
    } catch (err){
        await logService.log_save('5',err,'Products')
        res.status(404).send(err.message)
    }
}
//put('/updateproduct/:id') tìm và sửa sản phẩm
// Create by Quang Thuận
exports.findIdUpdate = async(req,res)=>{
    try{
    let data = await Product.findById(req.params.id)
    if(!data){
        logger.error(`Dont have any Product id ${req.params.id}`)
        return res.status(404).send("error update product")
    }
    let form = new formidable.IncomingForm();
    form.parse(req,async(err,fields,files)=>{
        if(!files.imageFile.name)
        {
            let update = await Product.findByIdAndUpdate(req.params.id,fields)
            await Product.findByIdAndUpdate(update.id,{$push:{
                product_history:[{
                    userID:  fields.userUpdate,
                    action : "UPDATE",
                    actionName : 'Cập nhật lại product thành công'
                }]
            }})
            res.status(200).send("update thanh cong a")
        } 
        else {
        let imagepath = `images/product/${files.imageFile.name}`
        fields.imageFile = imagepath
        form.uploadDir = "uploads/products/"
        let tmpPath = files.imageFile.path;
        let newPath = form.uploadDir + files.imageFile.name;
        mv(tmpPath,newPath,(err)=>{
            if(err) logService.log_save('5',err,'Products')
        })
        let update = await Product.findByIdAndUpdate(req.params.id,fields)
        await Product.findByIdAndUpdate(update.id,{$push:{
                product_history:[{
                    userID:  fields.userUpdate,
                    action : "UPDATE",
                    actionName : 'Cập nhật lại product thành công'
                }]
            }})
        res.status(200).send("update thanh cong b")
        }
    })
    } catch(err){
        await logService.log_save('5',err,'Products')
        res.status(404).send(err.message)
    }
}
//put('/statusproduct/:id') Cập nhật lại trạng thái product
// Create by Quang Thuận
exports.updateStatusProduct = async(req,res)=>{
    try{
        let result =await Product.findByIdAndUpdate(req.params.id,{"status":req.body.status})
        if(!result){
            logger.error(`Dont have any Product id ${req.params.id}`)
            return res.status(404).send("error update status")
        }
        res.status(200).send("Update status ok")
        await Product.findByIdAndUpdate(data.id,{        
            $push:{
            product_history:[{
                userID: req.body.userUpdate,
                action : "UPDATE",
                actionName : 'Cập nhật lại trạng thái thành công'
            }]
        }})
    }catch(err){
        await logService.log_save('5',err,'Products')
    }
}
//get('/findproduct/:id') tìm sản phẩm theo id
// create by Quang Thuận
exports.findid = async(req,res)=>{
    try{
        let product = await Product.findById(req.params.id)
        console.log("Dang goi API find product");
        res.status(200).send(product)
    }catch(err){
        await logService.log_save('5',err,'Products')
    }
}