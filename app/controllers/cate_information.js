const Cateinformation = require('../models/infomation.model')
const formidable = require('formidable')
const logger = require('../../log');

exports.create = async (req, res) => {
    let cateinformation = new Cateinformation(req.body)
    await cateinformation.save()
    res.status(200).send(cateinformation)
}

exports.findAll = async (req, res) => {
    let cateinformation = await Cateinformation.find()
    res.status(200).send(cateinformation)
}
