const mongoose = require('mongoose');

const cate_banner = mongoose.Schema({
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
module.exports = mongoose.model("cate-banner", cate_banner);
