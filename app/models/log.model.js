const mongoose = require('mongoose');

const logSchema = mongoose.Schema({
    add_Date: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        require: true
    },
    where:{
        type:String
    },
    content: {
        type: String,
        require: true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    level: {
        type: String,
        enum: ['0','1', '2', '3', '4', '5']
    },
    isFixed:{
        type: Boolean,
        default: 'false'
    }

},
{
    versionKey: false
})
module.exports = mongoose.model('log', logSchema);