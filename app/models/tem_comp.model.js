const mongoose = require('mongoose')

const tem_comSchema = mongoose.Schema({
    sourceCode: {
        type: String,
        required : true,
    },
})
module.exports= mongoose.model('tem_com', tem_comSchema)


// sourceCode must contain:
// '{img}' = link to image
// '{title}' = the title of the component
// '{description}' = the description of that component