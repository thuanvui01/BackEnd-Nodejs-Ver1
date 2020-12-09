const mongoose = require('mongoose');

const banner = mongoose.Schema({
    title: {
        type : String,
        required : true,
        trim : true,

    },
    detail:{
        type : String,
        trim : true,
    },
    banner_categoryID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cate-banner'
    },
    imagesURL:{
            type : String,
            required : true,
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
    banner_history:[{
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
module.exports = mongoose.model("banner", banner);
