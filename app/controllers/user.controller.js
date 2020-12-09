const User = require('../models/user.model')
const logger = require('../../log');
const mv = require('mv');
const formidable = require("formidable");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Role = require('../models/role.model')
const auth = require('../middleware/auth.middleware');
const { findOneAndDelete, populate } = require('../models/user.model');

//23/10/2020 Create by Nguyễn Hoàng Long
//create new user
exports.create = async(req,res) => {
    try{
        let form = new formidable.IncomingForm();
        form.parse(req,async function(err,fields,files){
            if(!files.avatar)
            {
                fields.avatar = 'images/avatar/images.png' 
            }
            else{
                let avatar = `images/avatar/${files.avatar.name}`
                fields.avatar = avatar
                form.uploadDir = "uploads/avatar/"
                let tmpPath = files.avatar.path;
                let newPath = form.uploadDir +files.avatar.name;
                mv(tmpPath,newPath,(err)=>{
                    if (err) logger.error(err)
                })
            }
            const user = new User(fields)
            await user.save()
            res.status(200).send('Create success !!')
            await User.findByIdAndUpdate(user.id,
                {
                    $push : {
                        history : [{
                            action : "CREATE",
                            actionName : 'Tạo tài khoản thành công'
                        }]
                    }
                })
        })
    }
    catch(err)
    {
        logger.error(err)
        res.status(400).send("Create account not success")
    } 
}

//23/10/2020 Create by Nguyễn Hoàng Long
//Chức năng login
exports.login = async(req,res) => {
    try{
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(!user)
        {
            return res.status(401).send('Sai email !!!')
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if(isPasswordMatch == false)
        {
            return res.status(401).send('Wrong password')
        }
        else
        {
            const token_dangnhap = jwt.sign({email : user.email,roleid : user.roleid,username : user.username,userid:user._id },`${user._id}`)
            await User.findByIdAndUpdate({_id:user._id},{
                $push : {
                    token : [{
                        token_login : token_dangnhap
                    }]
                }
            })
            res.status(200).json({token_login : token_dangnhap})
            await User.findByIdAndUpdate(user.id,{
                $push : {
                    history : [{
                        action : "LOGIN",
                        actionName : 'Đăng nhập tài khoản thành công'
                    }]
                }
            })
        }
    }
    catch(err)
    {
        res.status(400).send(err)
        logger.error(err)
    }
}

//23/10/2020 Create by Nguyễn Hoàng Long
//Lấy thông tin người dùng
exports.getuser = async(req,res) => {
    try{
        const user = await User.findById(res.locals.xacthuc,'username email gender phone address avatar')
        res.status(200).send(user)
        await User.findByIdAndUpdate(user.id,{
            $push : {
                history : [{
                    action : "GETDATA",
                    actionName : 'Truy cập trang Profile'
                }]
            }
        })  
    }
    catch(err)
    {
        logger.error(err)
        res.status(400).send(err)
    } 
}

//23/10/2020 Create by Nguyễn Hoàng Long
//Chức năng cập nhật thông tin người dùng
exports.update = (req,res) => {
    try{
        let form = new formidable.IncomingForm();
        form.parse(req,async function(err,fields,files){
            if(files.avatar)
            {
                let avatar = `images/avatar/${files.avatar.name}`
                fields.avatar = avatar
                form.uploadDir = "uploads/avatar/"
                let tmpPath = files.avatar.path;
                let newPath = form.uploadDir +files.avatar.name;
                mv(tmpPath,newPath,(err)=>{
                    if (err) logger.error(err)
                })
            }
            else
            {
                fields.avatar = 'images/avatar/images.png'  
            }
            const user = await User.findByIdAndUpdate(res.locals.xacthuc._id,fields)
            res.status(200).send('Update success')
            await User.findByIdAndUpdate(user.id,{
                $push : {
                    history : [{
                        action : "UPDATE",
                        actionName : `Cập nhật thông tin`
                    }]
                }
            })
        })
    }
    catch(err)
    {
        res.status(400).send(err)
        logger.error(err)
    } 
}

//27/10/2020 Create by Nguyễn Hoàng Long
//Xóa người dùng
exports.delete = async(req,res) => {
    try{
        const role = await Role.findById(res.locals.decode.roleid)
        if(role.name == "hr" || role.name == "admin")
        {
            const userbixoa = User.findOne(req.body.email,'roleid')
            const rolebixoa = await Role.findById(userbixoa.roleid)
            if(rolebixoa.name == "admim")
            {
                res.status(400).send('Không có quyền xóa admim')
            }
            else
            {
                const user = await User.findOneAndDelete(req.body.email)
                res.status(200).send('Delete success')
                logger.info(`${res.locals.decode.username} delete user ${user.username}`)
            }
        }
        else{
            res.status(400).send('Yêu cầu đăng nhập dưới quyền HR')
            logger.info(`${res.locals.decode.username} không có quyền xóa`)
        }
    }
    catch(err)
    {
        res.status(400).send(err)
        logger.error(`${res.locals.decode.username}Lỗi khi xóa người dùng : ${err}`)
    }
}

//27/10/2020 Create by Nguyễn Hoàng Long
// Đăng xuất
exports.logout = async (req,res) =>{
    try
    {
        await User.update({_id : res.locals.xacthuc._id,"token.token_login":req.headers.token_login},{$set:{"token.$.alive":'false'}})
        await User.findByIdAndUpdate(res.locals.xacthuc._id,{
            $push : {
                history : [{
                    action : "LOGOUT",
                    actionName : `Đăng xuất thành công`
                }]
            }
        })
        res.status(200).send('Logout success !!!')
    }
    catch(err)
    {
        res.status(400).send(err)
        logger.error(err)
    }
}

//27/10/2020 Create by Nguyễn Hoàng Long
// Chức năng đổi mật khẩu
exports.changepass = async(req,res) =>{
    try
    {
        const password = req.body.password
        const email = req.params.email
        const user = await User.findOne({email},'password')
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if(isPasswordMatch == false)
        {
            return res.status(400).json({'error' : 'Wrong Password'})
        }
        else
        {
            const pass = await bcrypt.hashSync(req.body.passwordnew,10)
            const up = await User.updateOne({email : req.params.email},{password:pass})
            res.status(200).send("Change password success !!!")
            await User.findByIdAndUpdate(res.locals.xacthuc._id,{
                $push : {
                    history : [{
                        action : "UPDATE",
                        actionName : `Đổi mật khẩu thành công`
                    }]
                }
            })
        }  
    }
    catch(err)
    {
        res.send('fail')
    }
}

//28/10/2020 Create by Nguyễn Hoàng Long
// Chức năng phân quyền
exports.permission = async(req,res) =>{
    try
    {
        const role = await Role.findById(res.locals.decode.roleid)
        if(role.name == "hr")
        {
            const roleid = await Role.findOne({name : req.body.rolename},'name')
            const permissionUser = await User.findByIdAndUpdate(req.body.id,{roleid:roleid._id})
            if(!permissionUser)
            {
                res.status(400).send('Action faill !!')
            }
            else
            {
                res.status(200).send('Permission complete')
                await User.findByIdAndUpdate(res.locals.xacthuc._id,{
                    $push : {
                        history : [{
                            action : "PERMISSION",
                            actionName : `Phân quyền ${permissionUser._id} thành ${roleid.name}`
                        }]
                    }
                })
            }
        }
        else(
            res.status(400).send('Đăng nhập dưới quyền HR ')
        )
    }
    catch(err)
    {
        res.send('fail')
    }
}
