const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title : {
        type : String,
        require : true,
        trim : true
    },
    pageid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'webpage'
    }
})

module.exports = mongoose.model('article',articleSchema);