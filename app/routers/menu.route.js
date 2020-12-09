const menu = require('../controllers/menu.controller')

module.exports = (app) => {    
    // input
    // {
    //     "display_name": "Trang chưa chủ",
    //     "page_link": "http://localhost:8000/webPage/view/5f992be7c2b9c817642ac102",
    //     "isMaster": true
    // }
    app.post('/menu/create/:userID',menu.create);

    app.get('/menu/find_childMenu/:menuID',menu.find_childMenu);

    app.get('/menu/showAll',menu.showAll);

    app.put('/menu/update/:menuID/:userID',menu.update);

    // menu/swapOrder/down/:menuID OR menu/swapOrder/up/:menuID
    app.put('/menu/swapOrder/:downOrUp/:menuID',menu.swapOrder); 

    app.put('/menu/update_order',menu.update_order);

    app.delete('/menu/delete/:menuID/:userID',menu.delete);

    }