const mongoose = require('mongoose')
const comSchema = mongoose.Schema({
    page_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'webPage',
        required : true,
        trim : true,
    },
    templeteID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tem_com',
        required : true,
        trim : true,
    },
    image: {
        type: String,
        required : true,
        trim : true,
    },
    title: {
        type: String,
        required : true,
        trim : true,
    },
    description: {
        type: String
    },
    
})
module.exports= mongoose.model('componet', comSchema)