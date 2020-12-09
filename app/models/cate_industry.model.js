const mongoose = require('mongoose');

const cate_intrustry = mongoose.Schema({
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
module.exports = mongoose.model("cate_intrustry", cate_intrustry);