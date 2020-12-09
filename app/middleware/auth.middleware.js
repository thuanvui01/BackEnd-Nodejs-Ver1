const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

//26/10/2020 Create by Nguyễn Hoàng Long
const auth = async(req,res,next) => {
    try
    {
        let token_login = req.headers.token_login
        const xacthuc = await User.findOne({token:{$elemMatch:{token_login:`${token_login}`,alive:true}}},'_id')
        const decode = jwt.verify(token_login,`${xacthuc._id}`)
        if(decode)
        {
            res.locals.decode = decode
            res.locals.xacthuc = xacthuc
            next()
            // console.log(decode);
            // console.log(xacthuc._id);
        }
    }
    catch(err)
    {
        res.status(401).send({error : 'Phiên làm việc hết hạn'})
    }
}
module.exports = auth