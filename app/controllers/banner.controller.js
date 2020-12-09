const Banner = require('../models/banner.model')
const formidable = require('formidable')
const mv = require('mv')
const logger = require('../../log')
const Log = require('../models/log.model')
const logService = require('../services/log.services');

//post("/createbanner") Tạo mới một banner
// Create by Quang Thuận

exports.create = async (req, res) => {
    let form = new formidable.IncomingForm();
    form.multiples = true;
    form.parse(req, async (err, fields, files) => {
        try {
            let result = await Banner.findOne({
                "oder": fields.oder,
                "banner_categoryID": fields.banner_categoryID
            })
            if (result) {
                return res.status(400).send("error create, have date in position")
            }
            let imagepath = `images/banner/${files.imagesURL.name}`
            fields.imagesURL = imagepath
            form.uploadDir = "uploads/banner/"
            let tmpPath = files.imagesURL.path;
            let newPath = form.uploadDir + files.imagesURL.name;
            mv(tmpPath, newPath, (err) => {
                if (err) logService.log_save('5',err,'Banner')
            })
            let catebanner = new Banner(fields)
            await catebanner.save()
            res.status(200).send({
                catebanner
            })
            await Banner.findByIdAndUpdate(catebanner.id, {
                $push: {
                    banner_history: [{
                        userID: fields.userID,
                        action: "CREATE",
                        actionName: 'Tạo banner thành công',
                    }]
                }
            })
        } catch (err) {
            await logService.log_save('5',err,'Banner')
            res.status(400).send("create fail")
        }
    })
}

//get('/banner/:categoryID') Hiển thị danh sách banner theo mục
// Create by Quang Thuận
exports.findAll = async (req, res) => {
    try {
        let catebanner = await Banner.find({
            "banner_categoryID": req.params.categoryID
        })
        catebanner.sort(function (a, b) {
            return a.oder - b.oder
        })
        res.status(200).send(catebanner)
    } catch (err) {
        res.status(404).send("error find banner");
        await logService.log_save('5',err,'Banner')
    }
}

//put('/banner/oderup') Thay đổi vị trí order
// Create by Quang Thuận
exports.oderup = async (req, res) => {
    try {
        let data1 = await Banner.findOne({"oder":req.query.number,"banner_categoryID":req.query.banner_categoryID})
        if(!data1){
            logger.error("Co loi o du lieu can thay doi")
            return res.status(404).send("Co loi o du lieu thay doi hoac khong tim thay")
        }
        let number = req.query.number
        let numberfind = number - 1
        let numberfake = 999999999
        let data2 = await Banner.findOneAndUpdate({
            "oder": numberfind,
            "banner_categoryID": req.query.banner_categoryID
        }, {
            "oder": numberfake
        })
        if (!data2) {
            await Banner.findOneAndUpdate({
                "oder": number,
                "banner_categoryID": req.query.banner_categoryID
            }, {
                "oder": numberfind
            })
            return res.status(200).send("change position complete")
        }
        let data3 = await Banner.findOneAndUpdate({
            "oder": number,
            "banner_categoryID": req.query.banner_categoryID
        }, {
            "oder": numberfind
        }, {
            new: true
        })
        if (!data3) {
            logger.error("Co loi o du lieu can thay doi")
            await Banner.findOneAndUpdate({
                "oder": numberfake,
                "banner_categoryID": req.query.banner_categoryID
            }, {
                "oder": numberfind
            })
            return res.status(404).send("Have error to update or cant find banner")
        }
        let data4 = await Banner.findOneAndUpdate({
            "oder": numberfake,
            "banner_categoryID": req.query.banner_categoryID
        }, {
            "oder": number
        }, {
            new: true
        })
        res.status(200).send("change position complete")
    } catch (err) {
        await logService.log_save('5',err,'Banner')
    }
}

//put('/deletebanner') Xóa một hoạc nhiều banner
// Create by Quang Thuận
exports.findbyCateIDandDelete = async (req, res) => {
    try {

        let data = await Banner.findOne({
            "_id": req.body
        })
        let ab = data.banner_categoryID
        let result = await Banner.deleteMany({
            "_id": req.body
        })
        if (result.deletedCount == 0) {
            res.status(400).send("error to delete")
            return await logService.log_save('5',err);
        }
        let banner_categoryID = await Banner.find({
            "banner_categoryID": ab
        })
        //console.log(banner_categoryID);
        banner_categoryID.sort(function (a, b) {
            return a.oder - b.oder
        })
        banner_categoryID.map(async (data, index) => {
            await Banner.findByIdAndUpdate(data.id, {
                "oder": index + 1
            })
        })
        res.status(200).send("delete complete")
        let log = new Log({
            "content": `Delete success banner ${req.body}`,
            "level": "1"
        })
        await log.save()
    } catch (err) {
        await logService.log_save('5',err,'Banner')
        res.status(404).send(err.message)
    }
}
//put('/banner/oderdown') Thay đổi vị trí order
// Create by Quang Thuận
exports.oderdown = async (req, res) => {
    try {
        let data0 = await Banner.findOne({"oder":req.query.number,"banner_categoryID":req.query.banner_categoryID})
        if(!data0){
            logger.error("Co loi o du lieu can thay doi")
            return res.status(404).send("Co loi o du lieu thay doi hoac khong tim thay")
        }
        let number = req.query.number
        let numberfind = number + 1
        let numberfake = 999999999
        let data1 = await Banner.findOneAndUpdate({
            "oder": numberfind,
            "banner_categoryID": req.query.banner_categoryID
        }, {
            "oder": numberfake
        })
        if (!data1) {
            await Banner.findOneAndUpdate({
                "oder": number,
                "banner_categoryID": req.query.banner_categoryID
            }, {
                "oder": numberfind
            })
            return res.status(200).send("change position complete")
        }
        let data2 = await Banner.findOneAndUpdate({
            "oder": number,
            "banner_categoryID": req.query.banner_categoryID
        }, {
            "oder": numberfind
        }, {
            new: true
        })
        if (!data2) {
            logger.error("Co loi o du lieu can thay doi")
            await Banner.findOneAndUpdate({
                "oder": numberfake,
                "banner_categoryID": req.query.banner_categoryID
            }, {
                "oder": numberfind
            })
            return res.status(404).send("Have error to update or cant find banner")
        }
        let data3 = await Banner.findOneAndUpdate({
            "oder": numberfake,
            "banner_categoryID": req.query.banner_categoryID
        }, {
            "oder": number
        }, {
            new: true
        })
        //logger.info(`Thay doi thanh cong vi tri hinh ${number} va ${numberfind} o cateID : ${req.query.banner_categoryID}`)
        res.status(200).send("change position complete")
    } catch (err) {
        await logService.log_save('5',err,'Banner')
    }
}
//put('/updatebanner/:id') tìm và sửa banner
// Create by Quang Thuận
exports.findIdUpdate = async (req, res) => {
    try {
        let data = await Banner.findById(req.params.id)
        if (!data) {
            logger.error(`Dont have any Banner id ${req.params.id}`)
            return res.status(404).send("error update banner")
        }
        let form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            if (!files.imagesURL.name) {
                let upimg = await Banner.findByIdAndUpdate(req.params.id, fields)
                res.status(200).send("update thanh cong")
                await Banner.findByIdAndUpdate(upimg.id, {
                    $push: {
                        banner_history: [{
                            userID: fields.userUpdate,
                            action: "UPDATE",
                            actionName: 'Cập nhật lại banner thành công'
                        }]
                    }
                })
            } else {
                let imagepath = `images/banner/${files.imagesURL.name}`
                fields.imagesURL = imagepath
                form.uploadDir = "uploads/banner/"
                let tmpPath = files.imagesURL.path;
                let newPath = form.uploadDir + files.imagesURL.name;
                mv(tmpPath, newPath, (err) => {
                    if (err) logService.log_save('5',err,'Banner')
                })
                let up = await Banner.findByIdAndUpdate(req.params.id, fields)
                res.status(200).send("update thanh cong")
                await Banner.findByIdAndUpdate(up.id, {
                    $push: {
                        banner_history: [{
                            userID: fields.userUpdate,
                            action: "UPDATE",
                            actionName: 'Cập nhật lại banner thành công'
                        }]
                    }
                })
            }
        })
    } catch (err) {
        await logService.log_save('5',err,'Banner')
        res.status(404).send(err.message)
    }
}
//put('/statusbanner/:id') Cập nhật lại trạng thái banner
// Create by Quang Thuận
exports.updateStatusBanner = async (req, res) => {
    try {
        let data = await Banner.findByIdAndUpdate(req.params.id, {
            "isDisplay": req.body.isDisplay
        })
        if (!data) {
            logger.error(`Dont have any Banner id ${req.params.id}`)
            return res.status(404).send("error update status")
        }
        res.status(200).send("Update status ok")
        await Banner.findByIdAndUpdate(data.id, {
            $push: {
                banner_history: [{
                    userID: req.body.userUpdate,
                    action: "UPDATE",
                    actionName: 'Cập nhật lại trạng thái thành công'
                }]
            }
        })
    } catch (err) {
        await logService.log_save('5',err,'Banner')
    }
}