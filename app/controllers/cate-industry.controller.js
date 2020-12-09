const Cateindustry = require('../models/cate_industry.model')
const formidable = require('formidable')

exports.create = async(req,res)=>{
    let form = new formidable.IncomingForm();
    form.multiples = true;
    form.parse(req, async(err,fields,files)=>{
        let cateindustry = new Cateindustry(fields)
        await cateindustry.save()
        res.status(200).send({cateindustry})
    })
}

exports.findAll = async(req,res)=>{
    let cateindustry = await Cateindustry.find()
    res.status(200).send(cateindustry)  
}