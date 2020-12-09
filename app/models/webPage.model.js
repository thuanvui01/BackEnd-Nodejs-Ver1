const mongoose = require('mongoose')

const webPageSchema = mongoose.Schema({
    type : {
        type: String,
        enum: ["Standard", "Existing", "URL", "File"]
    },
    creatorID: {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    name: {
        type : String,
        required : true,
        trim : true,
    },
    title: {
        type : String,
        required : true,
        trim : true
    },
    discription: {
        type : String,
        required : true,
        trim : true
    },
    // tag: {
    //     type: [String]
    // },
    role: [{
        _id: {type: mongoose.Schema.Types.ObjectId, ref: 'role'},
        isEdit: Boolean,
        isView: Boolean
    }],
    editor: [{
        _id: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
        isEdit: Boolean,
        isView: Boolean
    }],
    icon: {
        type: String,
        require: true,
        trim : true
    },
    attach_file: {
        type: String,
        trim : true
    },
    isAnonymous: {
        type: Boolean,
        required : true,
    },
    status: Boolean,
    isDisplayMenu: Boolean,
    page_History: [{
        user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
        date_modify: {type: Date, default: Date.now}
    }],
    create_Date: {
        type: Date,
        default: Date.now,
    }
},
{
    versionKey: false
});
webPageSchema.index({name: 'text'});
module.exports = mongoose.model('webPage',webPageSchema)



// input
// {
//     "type" : "Standard",
//     "userID": "5f9128c4e79d1a2038643bc4",
//     "name": " asvbn",
//     "title": " aszdvsdbsdbs",
//     "discription": " casvdvbsdb",
//     "role": [{
//         "_id": "5f91418f81ad14318c5de039" ,
//         "isEdit": true,
//         "isView": true
//     }, {
//         "_id": "5f91419781ad14318c5de03a" ,
//         "isEdit": false,
//         "isView": true
//     }],
//     "creator": [{
//         "_id": "5f9128c4e79d1a2038643bc4",
//         "isEdit": true,
//         "isView": true
//     }],
//     "icon": "cbashvh sdvs ",
//     "attach_file": "fcgvbn ",
//     "isAnonymous": true,
//     "isDisplayMenu": true
// }