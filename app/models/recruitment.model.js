const mongoose = require('mongoose');

const recruitment = mongoose.Schema({
    title : {
        type : String,
        require : true,
        trim : true
    },
    description:{
        type : String,
        require : true,
        trim : true
    },
    request:{
        type : String,
        trim:true
    },
    benefits:{
        type: String,
        trim: true
    },
    contact:{
        type: String,
        trim: true
    },
    place:{
        type: String,
        trim: true,
        require : true
    },
    amount:{
        type: Number,
        trim: true,
        require : true
    },
    wage:{
        type: String,
        trim:true,
        require:true
    },
    status:{
        type: Boolean,
        default : "true"
    },
    recruitment_history:[{
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
    }]
},{
    timestamps: { createdAt: 'created_at', updatedAt: 'last_modified'},
    versionKey: false
})

module.exports = mongoose.model('recruitment',recruitment);