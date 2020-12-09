const Cateinfo = require('../models/cate_info.model')
const formidable = require('formidable')

exports.create = async(req,res)=>{
    let form = new formidable.IncomingForm();
    form.multiples = true;
    form.parse(req, async(err,fields,files)=>{
        let cateinfo = new Cateinfo(fields)
        await cateinfo.save()
        res.status(200).send({cateinfo})
    })
}

exports.findAll = async(req,res)=>{
    let cateinfo = await Cateinfo.find()
    res.status(200).send(cateinfo)  
}