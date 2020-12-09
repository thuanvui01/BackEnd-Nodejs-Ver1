const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
const path = require('path')
const cron = require('node-cron')
const app = express();

//const Log = require('./app/controllers/log.controller')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use('/images/avatar',express.static("uploads/avatar"))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

require('./app/routers/user.router')(app);
require('./app/routers/role.router')(app);
require('./app/routers/webPage.route')(app);
require('./app/routers/menu.route')(app);
require('./app/routers/cate_banner.router')(app);
require('./app/routers/banner.router')(app);
require('./app/routers/component.route')(app);
require('./app/routers/tem_com.route')(app)
require('./app/routers/product.router')(app)
require('./app/routers/cate_information.router')(app)
require('./app/routers/cate_products.router')(app)
require('./app/routers/information.router')(app)

app.use('/images/banner',express.static("uploads/banner"));
app.use('/images/component',express.static("uploads/component_image"));
app.use('/file/component',express.static("uploads/com_templete"));
app.use('/images/products',express.static("uploads/products/"));
app.use('/files',express.static("uploads/myFiles"));
app.use('/images',express.static("uploads/myImages"));
app.use('/file/information',express.static("uploads/information"));

mongoose.Promise = global.Promise;

//connect mongodb
mongoose.connect(dbConfig.url, {
    useNewUrlParser :true,
    useUnifiedTopology: true,
    useFindAndModify: false 
}).then(()=>{
    console.log("Ket noi thanh cong");
}).catch(err=>{
    console.log('Connect Fail',err);
    process.exit();
});

app.use(express.static("apidocument"));
// app.set("view engine", "ejs");
// app.set("apidoc", "./apidoc");
app.get('/apidoc', function(req, res){
	res.sendFile(path.join(__dirname+'/apidocument/index.html'));
})
var Log = require('./app/models/log.model')
 cron.schedule('0 0 * * * *', async () => {
        let data = await Log.deleteMany({"level":3,"isFixed":false})
        if(data.deletedCount==0){
            return console.log("nothing log to delete");
        }
        console.log("clear log level 3");
 });

app.listen(8000,()=>
{
    console.log("đang chạy port 8000");
});