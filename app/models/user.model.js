const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator');
const { data } = require('../../log');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique : true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({error: 'Email không hợp lệ'})
            }
        }
    },
    password: {
        type : String,
        required: true,
        minLength: 9
    },
    avatar :{
        type : String,
        require : true,
        trim : true
    },
    gender : {
        type : Boolean,
        require : true,
        trim : true
    },
    phone: {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    address: {
        type : String,
        required : true,
        trim : true
    },
    roleid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'role'
    },
    token : [{
        token_login : {
            type : String,
            required : true,
            trim : true
        },
        create_at : {
            type: Date,
            default: Date.now,
        },
        alive : {
            type :Boolean,
            default : "true"
        }
    }],
    history : [{
        action : {
            type : String,
            required : true,
            trim : true
        },
        actionName : {
            type : String,
            required : true,
            trim : true
        },
        actionDay : {
            type : Date,
            default : Date.now
        }
    }]
},
{
    timestamps: { createdAt: 'created_at'},
    versionKey: false
});

userSchema.pre('save', async function (next){
    const user = this
    if(user.isModified('password'))
    {
        user.password = await bcrypt.hash(user.password,10)
    }
    next();
});

module.exports = mongoose.model('user',userSchema);