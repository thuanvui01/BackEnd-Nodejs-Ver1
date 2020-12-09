const Information = require('../models/infomation.model')
const formidable = require('formidable')
const mv = require('mv')
const logger = require('../../log')
const Log = require('../models/log.model')
const logService = require('../services/log.services');


//post("/createinformation") Tạo mới một information
// Create by Quang Thuận

exports.create = async(req,res)=>{ 
    let form = new formidable.IncomingForm();
    form.multiples = true;
        form.parse(req, async(err,fields,files)=>{
        try{
            let result = await Information.findOne({"oder":fields.oder,"cate_informationID":fields.cate_informationID})
            if(result){
                return res.status(400).send("error create, have information in position")
            }    
            if(!files.file.name)
            {
            let information = new Information(fields)
            await information.save()
            await Information.findByIdAndUpdate(information.id,{$push:{
                information_history:[{
                    userID:fields.userID,
                    action : "CREATE",
                    actionName : 'Tạo information thành công',
                }]
            }})
            return res.status(200).send("create success information")
            }   
            let filepath = `file/information/${files.file.name}`
            fields.file = filepath
            form.uploadDir = "uploads/information/"
            let tmpPath = files.file.path;
            let newPath = form.uploadDir + files.file.name;
            mv(tmpPath,newPath,(err)=>{
                if(err) logService.log_save('5',err,'Information')
            })
            let information = new Information(fields)
            await information.save()
            res.status(200).send('create success information')
            await Information.findByIdAndUpdate(information.id,
                {
                    $push : {
                        information_history: [{
                            userID:fields.userID,
                            action : "CREATE",
                            actionName : 'Tạo information thành công', 
                        }]
                    }
                })
        }    catch(err)
        {
            await logService.log_save('5',err,'Information')
        } 
    })
}

//get('/information/:cate_informationID') Hiển thị danh sách information theo mục
// Create by Quang Thuận
exports.findAll = async(req,res)=>{
    let information = await Information.find({"cate_informationID":req.params.cate_informationID})
    if(!information){
        return res.status(404).send("Error to find information")
    }
    information.sort(function(a,b){
        return a.oder - b.oder
    })
    res.status(200).send(information)  
    logger.info(`find success banner`)
}

//put('/information/oderup') Thay đổi vị trí order
// Create by Quang Thuận

exports.oderup = async(req,res)=>{
    
    try{
        let data1=await Information.findOne({"oder":req.query.number,"banner_categoryID":req.query.banner_categoryID}).catch(err)
        if(!data1){
            logger.error("Co loi o du lieu can thay doi")
            return res.status(404).send("Co loi o du lieu thay doi hoac khong tim thay")
        }   
    let number = req.query.number
    let numberfind = number - 1
    let numberfake = 999999999
    let data2 = await Information.findOneAndUpdate({"oder":numberfind,"cate_informationID":req.query.cate_informationID},{"oder":numberfake})
    if(!data2){
        await Banner.findOneAndUpdate({
            "oder": number,
            "banner_categoryID": req.query.banner_categoryID
        }, {
            "oder": numberfind
        })
        return res.status(200).send("change position complete")
    }
    let data3 = await Information.findOneAndUpdate({"oder":number,"cate_informationID":req.query.cate_informationID},{"oder":numberfind},{new:true})
    if(!data3){
        logger.error("Co loi o du lieu can thay doi")
        await Information.findOneAndUpdate({"oder":numberfake,"cate_informationID":req.query.cate_informationID},{"oder":numberfind})
        return res.status(404).send("Co loi o du lieu thay doi hoac khong tim thay")
    }
    let data4 = await Information.findOneAndUpdate({"oder":numberfake,"cate_informationID":req.query.cate_informationID},{"oder":number},{new:true})
    res.status(200).send("change position complete")
    }
    catch(err){
        await logService.log_save('5',err,"Information")
    }
}

//put('/deleteinformation') Xóa một hoạc nhiều information
// Create by Quang Thuận

exports.findbyCateIDandDelete = async(req,res)=>{
    try{
        
    let data = await Information.findOne({"_id":req.body})
    let ab = data.banner_categoryID
    let result = await Information.deleteMany({"_id":req.body})
    if(result.deletedCount==0){
        res.status(400).send("error to delete")
        return logService.log_save('5',err);
    }
    let cate_informationID = await Information.find({"banner_categoryID":ab})
    //console.log(banner_categoryID);
    cate_informationID.sort(function(a,b){
        return a.oder - b.oder
    })
    cate_informationID.map(async (data,index)=>{
        await Information.findByIdAndUpdate(data.id,{"oder":index+1})
    })
     res.status(200).send("delete complete")  
     let log = new Log({
        "content" : `Delete success banner ${req.body}`,
        "level":"1"
    })
    await log.save()
    } catch (err){
        await logService.log_save('5',err,'Information')
        res.status(404).send(err.message)
    }
}

//put('/information/oderdown') Thay đổi vị trí order
// Create by Quang Thuận

exports.oderdown = async(req,res)=>{
    try{
        let data0 = await Information.findOne({"oder":req.query.number,"banner_categoryID":req.query.banner_categoryID})
        if(!data0){
            logger.error("Co loi o du lieu can thay doi")
            return res.status(404).send("Co loi o du lieu thay doi hoac khong tim thay")
        }    
    let number = req.query.number
    let numberfind = number + 1
    let numberfake = 999999999
    let data1 = await Information.findOneAndUpdate({"oder":numberfind,"cate_informationID":req.query.cate_informationID},{"oder":numberfake})
    if(!data1){
        await Banner.findOneAndUpdate({
            "oder": number,
            "banner_categoryID": req.query.banner_categoryID
        }, {
            "oder": numberfind
        })
        return res.status(200).send("change position complete")
    }
    let data2 = await Information.findOneAndUpdate({"oder":number,"cate_informationID":req.query.cate_informationID},{"oder":numberfind},{new:true})
    if(!data2){
        logger.error("Have error to update or cant find banner")
        await Information.findOneAndUpdate({"oder":numberfake,"cate_informationID":req.query.cate_informationID},{"oder":numberfind})
        return res.status(404).send("Co loi o du lieu thay doi hoac khong tim thay")
    }
    let data3 = await Information.findOneAndUpdate({"oder":numberfake,"cate_informationID":req.query.cate_informationID},{"oder":number},{new:true})
    res.status(200).send("change position complete")
    }
    catch(err){
        await logService.log_save('5',err,'Information')
    }
}

//put('/updateinformation/:id') tìm và sửa chữa information
// Create by Quang Thuận
exports.findIdUpdate = async(req,res)=>{
    try{
    let data = await Information.findById(req.params.id)
    if(!data){
        logger.error(`Dont have any Information id ${req.params.id}`)
        return res.status(404).send("error update Information")
    }
    let form = new formidable.IncomingForm();
    form.parse(req,async(err,fields,files)=>{
        if(!files.file.name)
        {
            let upfile = await Information.findByIdAndUpdate(req.params.id,{fields},{new:true})
            res.status(200).send("update thanh cong")
            await Banner.findByIdAndUpdate(upfile.id,{        
                $push:{
                information_history:[{
                    userID:  fields.userUpdate,
                    action : "UPDATE",
                    actionName : 'Cập nhật lại information thành công'
                }]
            }})
        } 
        else {
            let filepath = `file/information/${files.file.name}`
            fields.file = filepath
            form.uploadDir = "uploads/information/"
            let tmpPath = files.file.path;
            let newPath = form.uploadDir + files.file.name;
            mv(tmpPath,newPath,(err)=>{
                if(err) logService.log_save('5',err)
            })
        let up = await Information.findByIdAndUpdate(req.params.id,{fields},{new:true})
        await Banner.findByIdAndUpdate(up.id,{        
            $push:{
            information_history:[{
                userID:  fields.userUpdate,
                action : "UPDATE",
                actionName : 'Cập nhật lại information thành công'
            }]
        }})
        res.status(200).send("update thanh cong")
        }
    })
    } catch(err){
        await logService.log_save('5',err,'Information')
        res.status(404).send(err.message)
    }
}

//put('/statusinformation/:id') Cập nhật lại trạng thái information
// Create by Quang Thuận

exports.updateStatusInformation = async(req,res)=>{
    try{
        let result =await Information.findByIdAndUpdate(req.params.id,{"isDisplay":req.body.isDisplay})
        if(!result){
            logger.error(`Dont have any Information id ${req.params.id}`)
            return res.status(404).send("error update status")
        }
        res.status(200).send("Update status ok")
        await Banner.findByIdAndUpdate(result.id,{        
            $push:{
            information_history:[{
                userID:  fields.userUpdate,
                action : "UPDATE",
                actionName : 'Cập nhật lại trạng thái information thành công'
            }]
        }})
    }catch(err){
        await logService.log_save('5',err,'Information')
    }
}

