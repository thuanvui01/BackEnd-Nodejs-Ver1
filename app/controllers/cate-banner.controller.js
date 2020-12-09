const Catebanner = require('../models/cate_banner.model')
const formidable = require('formidable')
const logger = require('../../log');

exports.create = async(req,res)=>{
    let form = new formidable.IncomingForm();
    form.multiples = true;
    form.parse(req, async(err,fields,files)=>{
        let catebanner = new Catebanner(fields)
        await catebanner.save()
        res.status(200).send({catebanner})
        logger.info(`create catebanner success`)
    })
}

exports.findAll = async(req,res)=>{
    let catebanner = await Catebanner.find()
    res.status(200).send(catebanner)  
}
