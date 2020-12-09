const mongoose = require('mongoose');

const cate_information = mongoose.Schema({
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
module.exports = mongoose.model("cate_information", cate_information);