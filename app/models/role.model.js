const mongoose = require('mongoose')

const roleSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        unique : true
    }
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'last_modified'},
    versionKey: false
})
module.exports = mongoose.model('role',roleSchema)