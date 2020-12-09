module.exports = (app) => {
    const user = require('../controllers/user.controller')
    const auth = require('../middleware/auth.middleware')

    app.post('/register',user.create);

    app.post('/login',user.login);

    app.get('/user/getuser',auth,user.getuser)

    app.post('/user/update',auth,user.update)

    app.post('/user/delete',auth,user.delete)

    app.post('/user/logout',auth,user.logout)

    app.post('/user/changepass/:email',auth,user.changepass)

    app.post('/user/permission',auth,user.permission)
}
