const Role = require('../models/role.model')
const logger = require('../../log');
const User = require('../models/user.model')

//23/10/2020 Create by Nguyễn Hoàng Long
exports.create = async(req,res) =>{
    try{
        let form= formidable.IncomingForm();
        form.parse(req, async function(err, fields, files) {
            let role = new Role(fields);
            await role.save();
            new logger({
                content: `Created a role ${fields.name}`,
                level: "0"
                });
            await log.save();
            res.status(200).send('create role success !!');
        });
    }catch(err)
    {
        let log = new logger({
            content: err,
            level: "5"
        });
        let data=await log.save();
        console.log(err);
        if (!data)
        {
            locallog.error(err);
            res.status(400).send(err);
        }    
    }
}

exports.getdata = async(req,res) => {
    try{
        const role = await Role.findOne({name : req.params.name})
        const user = await User.find({"roleid":role._id},'username')
        res.status(200).send(user)
    }catch(err)
    {
        res.status(400).send(err)
    }
}