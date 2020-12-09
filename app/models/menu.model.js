const mongoose = require('mongoose')


const menuSchema = mongoose.Schema({
    display_name: {
        type : String,
        required : true,
        trim : true,
    },
    page_link: {
        type : String,
        trim : true,
    },
    page_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'webPage',
        trim : true,
    },
    parent_MenuID: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'menu',
        trim : true
    },
    order: {
        type : String,
        trim : true
    },
    isMaster: {
        type: Boolean,
    },
    menu_History: [{
        user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
        atFuction: String,
        content: String,
        date_modify: {type: Date, default: Date.now}
    }],
},
{
    versionKey: false
});

module.exports = mongoose.model('menu',menuSchema);

// input
// {
//     "display_name": " Trang chưa chủ",
//     "page_link": "http://localhost:8000/webPage/view/5f992be7c2b9c817642ac102",
//     "isMaster": true
// }