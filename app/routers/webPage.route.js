module.exports = (app) => {
    const webPage = require('../controllers/webPage.controller')

    app.post('/webPage/create',webPage.createDetail);

    app.put('/webPage/updateDetail/:pageID',webPage.updateDetail);

    app.put('/webPage/permission/:pageID',webPage.modifyPermission);

    app.get('/webPage/view/:pageID',webPage.view);

    app.post('/webPage/searching/',webPage.searchBy_NameTitle); //need {"searchString": "abcxyz"}

    app.delete('/webPage/delete/:pageID',webPage.delete);
}