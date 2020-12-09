const TemCom = require('../models/tem_comp.model')
const mv = require('mv');
const formidable = require("formidable");



exports.create = async (req, res) => {
    try {
        let form = formidable.IncomingForm();
        form.parse(req, async function(err, fields, files){
            // fields.sourceCode = `file/component/${files.sourceCode.name}`;
            let templete = new TemCom(fields);
            await templete.save();
            // console.log(templete.sourceCode)
            // form.uploadDir = 'uploads/com_templete/';
            // let tmpPath = files.sourceCode.path;
            // let newPath = form.uploadDir + files.sourceCode.name;
            // await console.log(tmpPath);
            // await console.log(newPath);
            // mv(tmpPath,newPath,(err)=>{
            //     if (err) console.log(err);
            // });
            res.status(200).send('Create success !!')
        })
    } catch (err) {
        res.status(400).send(err)
    };
};



