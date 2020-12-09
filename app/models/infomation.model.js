const mongoose = require('mongoose');

const information = mongoose.Schema({
    title: {
        type : String,
        required : true,
        trim : true,

    },
    content:{
        type : String,
        required : true,
        trim : true,
    },
    cate_informationID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cate_information'
    },
    file:{
        type : String,
        trim : true,
    },
    oder:{
        type: Number,
        required :true,
        trim:true,
    },
    isDisplay:{
        type: Boolean
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    information_history:[{
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
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
        dateModify:{
            type: Date,
            default: Date.now
        }
    }],
},{
    timestamps: { createdAt: 'created_at', updatedAt: 'last_modified'},
    versionKey: false
});
module.exports = mongoose.model("information", information);
