const WebPage = require('../models/webPage.model');
const mv = require('mv');
const formidable = require("formidable");
const logService = require('../services/log.services');

function removeAccents(str) {
    return str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}


//POST: /webPage/create
exports.createDetail = async (req, res) => {
    //Generated by Ai Linh at 28/10/20
    try {
        let form = new formidable.IncomingForm();
        form.multiples = true
        form.parse(req, async function (err, fields, files) {
            fields.icon = `images/${files.icon.name}`
            form.uploadDir = "uploads/myImages/"
            let tmpPath = files.icon.path;
            let newPath = form.uploadDir + files.icon.name;

            mv(tmpPath, newPath, (err) => {
                if (err) return err
            })
            if (files.attach_file) {
                fields.attach_file = `files/${files.attach_file.name}`
                form.uploadDir = "uploads/myFiles/"
                let tmpPath1 = files.attach_file.path;
                let newPath1 = form.uploadDir + files.attach_file.name;

                mv(tmpPath1, newPath1, (err) => {
                    if (err) return err
                })
            }
            let page = new WebPage(fields);

            //remove accent and uppercase in name and title then push them into page.tag
            re_name = removeAccents(page.name).toLowerCase();
            re_title = removeAccents(page.title).toLowerCase();
            if (re_name === re_title) page.tag.push(re_name)
            else page.tag.push(re_name, re_title)

            await page.save();
            res.status(200).send("ok");
        });
    } catch (err) {
        logService.log_save('5', err)
        res.status(400).send()
    }
}

//PUT: webPage/updateDetail/:pageID
exports.updateDetail = async (req, res) => {
    //Generated by Ai Linh at 28/10/20
    try {
        let page = await WebPage.findOne({ "_id": req.params.pageID })

        let form = formidable.IncomingForm();
        form.parse(req, async function (err, fields, files) {
            //if user change the icon and attach_file fields, create a new uploadDir
            //if == true even when the upload files have the same name bcs in databse files is stored as a link
            if (page.icon != fields.icon) {
                fields.icon = `images/${files.icon.name}`
                form.uploadDir = "uploads/myImages/"
                let tmpPath = files.icon.path;
                let newPath = form.uploadDir + files.icon.name;

                mv(tmpPath, newPath, (err) => {
                    if (err) throw err
                })
            }
            if (page.attach_file != fields.attach_file) {
                console.log("attach not the same")
                fields.attach_file = `files/${files.attach_file.name}`
                form.uploadDir = "uploads/myFiles/"
                let tmpPath1 = files.attach_file.path;
                let newPath1 = form.uploadDir + files.attach_file.name;

                mv(tmpPath1, newPath1, (err) => {
                    if (err) throw err
                })
            }
            await page.updateOne(fields)
        })
        res.status(200).send("ok")
    } catch (err) {
        logService.log_save('5', err)
        res.status(400).send()
    }
}

//PUT: /webPage/permission/:pageID'
exports.modifyPermission = async (req, res) => {
    //Generated by Ai Linh at 28/10/20
    try {
        await WebPage.findOneAndUpdate(req.params.pageID, {
            $set: req.body
        }, { new: true })
        res.status(200).send('oke')
    } catch (err) {
        logService.log_save('5', err)
        res.status(400).send()
    }
}

//POST: /webPage/searching => res.body: {searchString: "abc"}
exports.searchBy_NameTitle = async (req, res) => {
    //Generated by Ai Linh at 28/10/20
    try {
        let pages = await WebPage.find({ $text: { $search: req.body.searchString } });
        if (!pages) res.send("none")
        else res.send(pages)
        console.log("-------------------------")

        res.status(200).send('oke')
    } catch (err) {
        logService.log_save('5', err)
    }
}

//GET: /webPage/view/:pageID
exports.view = async (req, res) => {
    //Generated by Ai Linh at 28/10/20
    try {
        let page = await WebPage.findOne({ '_id': req.params.pageID })
            .select('-page_HistoryModify')
            .populate({ path: 'creatorID', select: 'username' })
            .populate({ path: 'role._id', select: 'name' })
            .populate({ path: 'editor._id', select: 'username' }).lean() //use lean so that we can edit this JSON
        if (!page.status) {
            res.status(404).send('not found')
        }
        if (!page.creatorID) {
            console.log('true')
            page.creatorID = "This user is deleted"
        }
        if (!page.role._id) {
            page.creatorID = "This role is deleted"
        }
        if (!page.editor._id) {
            page.creatorID = "This user is deleted"
        }
        res.status(200).json(page);
    } catch (err) {
        if (err.kind === 'ObjectId') {
            logService.log_save('5',err, `Not found ${req.params.pageID} to view`)
            res.status(404).json({ message: "not found " + req.params.pageID })
        }
        else {
            logService.log_save('5',err)
            res.status(400).json({ message: err.message });
        }
    }
}

//DELETE: /webPage/delete/:pageID
exports.delete = async (req, res) => {
    //Generated by Ai Linh at 28/10/20
    try {
        let page = await WebPage.findByIdAndRemove(req.params.pageID);

        logService.log_save('0', '', `Delete '${page.name}', ok`)
        res.status(200).json("Deleted");
    } catch (err) {
        if (err.kind === 'ObjectId') {
            logService.log_save('5',err)
            res.status(404).json({ message: "not found " + req.params.pageID })
        }
        else {
            logService.log_save('5',err)
            res.status(400).json({ message: err.message });
        }
    }
}