const mongoose = require('mongoose');

const cate_info = mongoose.Schema({
    name:{
        type : String,
        required : true,
        trim : true,
    },
    description:{
        type : String,
        trim: true
    }
});
module.exports = mongoose.model("cate_info", cate_info);