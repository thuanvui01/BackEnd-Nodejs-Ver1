const Component = require('../models/component.model')
const logger = require('../models/log.model');
const locallog = require('../../log');
const mv = require('mv');
const formidable = require("formidable");

exports.create = async(req, res) => {
    try {
        let form = formidable.IncomingForm();
        form.parse(req, async function(err, fields, files){
            if(!files.image) {
                fields.image = 'images/component/no-image-800x600.png'
                let component = new Component(fields);
                await component.save();
            }
            else{
                fields.image = `images/component/${files.image.name}`
                let component = new Component(fields);
                await component.save();
                form.uploadDirawi = 'uploads/component_image/';
                let tmpPath = files.image.path;
                let newPath = form.uploadDir +files.image.name;
                mv(tmpPath,newPath,(err)=>{
                    if (err) console.log(err);
                });
                console.log(component);
                
            }
            let log = new logger({
                content: `Created a component ${fields.title}`,
                level: "0"
                })
            await log.save();
            res.status(200).send('Create success !!')
        });

    } catch (err) {
        let log = new logger({
            content: err,
            level: "5"
        })
        let data=await log.save();
        console.log(err)
        if (!data)
        {
            locallog.error(err);
            res.status(400).send(err)
        }
    }
}

exports.showComByPageID = async (req, res) => {
    try {
        let query = await Component.find({})
            .where('page_id').equals(req.params.pageID)
            .populate({path: 'page_id', select:'title'})
            .populate({path: 'templeteID', select:'sourceCode'});
        let output_code = new Array();
        query.forEach(async el => {
            let source_code = el.templeteID.sourceCode;
            let title = el.title;
            let imageSource = el.image;
            let des = el.description;

            source_code = await source_code.replace("{img}", imageSource);
            source_code = await source_code.replace("{title}", title);
            source_code = await source_code.replace("{description}", des);

            await output_code.push(source_code);
            console.log(output_code)
        });
        
        res.status(200).send(output_code);
        }
    catch (err) {
        res.status(400).send(err)
    };
};