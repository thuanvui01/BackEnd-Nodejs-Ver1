const mongoose = require('mongoose');

const product = mongoose.Schema({
    cate_infoID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cate-info'
    },
    cate_industryID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cate-industry'
    },
    name:{
        type : String,
        trim : true,
        required:true
    },
    customer:{
        type : String,
        trim : true,
        required:true
    },
    solution:{
        type : String,
        trim : true,
        required:true
    },
    size:{
        type : Number,
        trim : true,
        required:true
    },
    content:{
        type : String,
        trim : true,
        required:true
    },
    imagesFile:{
            type : String,
            required : true,
            trim : true,
    },
    status:{
        type: Boolean,
        default : "true"
    },
    product_history:[{
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
module.exports = mongoose.model("product", product);
