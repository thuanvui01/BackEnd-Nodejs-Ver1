/**
 * @api {post} /tdcmobileapp/versionlist/create/:id Chức năng tạo version theo app
 * @apiName Create_AVersionApp
 * @apiGroup versionlist
 *
 * @apiPermission admin
 * 
 * @apiParam {ObjectID} :id (Header) xác định version sắp được tạo là của app nào. App này phải đang tồn tại trong database.
 * @apiParam {String} version (Body) Tên của version đang được tạo
 * @apiParam {String} android (Body) File android của version đang được tạo
 * @apiParam {String} ios  (Body) File IOS của version đang được tạo
 * @apiParam {String} descripstion (Body) Mô tả của version đang được tạo
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 *              HTTP/1.1 200 OK
                   { "Insert success !!!" }    
 * 
 * @apiError 400 không có quyền truy cập
 * @apiError 500 System error 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *       "error": "Phiên làm việc hết hạn"
 *     }
 * @apiErrorExample Error-System:
 *     HTTP/1.1 500 Not Found
 *     {
 *       err.message
 *     }
 */

 /**
 * @api {post} /tdcmobileapp/versionlist/update/:idapp/:idversion  Chức năng update một version của một app
 * @apiName Update_AVersionApp
 * @apiGroup versionlist
 *
 * @apiPermission admin
 * 
 * @apiParam {ObjectID} :idapp (Header) xác định version đang được sửa là của app nào. App này phải đang tồn tại trong database.
 * @apiParam {ObjectID} :idversion (Header) xác định version đang được sửa là cái nào. Version này phải đang tồn tại trong database.
 * @apiParam {String} version (Body) Tên của version đang được sửa
 * @apiParam {String} android (Body) File android của version đang được sửa
 * @apiParam {String} ios  (Body) File IOS của version đang được sửa
 * @apiParam {String} descripstion (Body) Mô tả của version đang được sửa
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 *              HTTP/1.1 200 OK
                   { "Update complete !!!" }    
 * 
 * @apiError 400 không có quyền truy cập
 * @apiError 500 System error 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *       "error": "Phiên làm việc hết hạn"
 *     }
 */

/**
 * @api {get} /tdcmobileapp/versionlist/:idapp Chức năng lấy thông tin của tất cả version của một app bất kì
 * @apiName GetInfo_AllVersionsOfAnApp
 * @apiGroup versionlist
 *
 * @apiPermission Anonymous (All)
 * 
 * @apiParam {ObjectID} :idapp (Header) xác định version cần được trả về là của app nào. App này phải đang tồn tại trong database.
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 *              HTTP/1.1 200 OK
                      [
                        {
                            "_id": "5fbe22b656c4642a786e1c9b",
                            "version": "0.1",
                            "descripstion": "- Chức năng gì đó được bổ sung và chiếm độ dài như thế này<br> - Cải thiện hiệu năng gì đó để app trở nên ngon lành cành đào<br> - Chức năng này mô tả ngắn",
                            "android": "https://apps.fis.vn/downloadfile/version/Boston_TDV/boston_tdv_v0.1.apk",
                            "ios": "itms-services://?action=download-manifest&url=https://apps.fis.vn/downloadfile/version/Boston_TDV/Boston_TDV_0.1.plist",
                            "created_at": "2020-11-25T09:24:06.576Z"
                        },
                        {
                            "_id": "5fbe232956c4642a786e1c9c",
                            "version": "0.2",
                            "descripstion": "- Chức năng gì đó được bổ sung và chiếm độ dài như thế này<br> - Cải thiện hiệu năng gì đó để app trở nên ngon lành cành đào<br> - Chức năng này mô tả ngắn",
                            "android": "https://apps.fis.vn/downloadfile/version/Boston_TDV/boston_tdv_v0.2.apk",
                            "ios": "itms-services://?action=download-manifest&url=https://apps.fis.vn/downloadfile/version/Boston_TDV/Boston_TDV_0.2.plist",
                            "created_at": "2020-11-25T09:26:01.812Z"
                        }
                      ]
 * 
 * @apiError 500 System error 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *       "Error": Phiên làm việc hết hạn"
 *     }
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Not Found
 *     {
 *       "Oop Someting went wrong try again later !!"
 *     }
 */

/**
 * @api {delete} /tdcmobileapp/versionlist/delete/:id Chức năng delete một version bất kỳ
 * @apiName Delete_AVersionApp
 * @apiGroup versionlist
 *
 * @apiParam {ObjectID} :id (Header) xác định version cần được delete. App này phải đang tồn tại trong database.
 * 
 * @apiPermission admin 
 * 
 * @apiSuccessExample {json} Success-Response:
 *              HTTP/1.1 200 OK
                   { "Delete version success !!" }    
 * 
 * @apiError 400 không có quyền truy cập
 * @apiError 500 System error 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *       "error": "Phiên làm việc hết hạn"
 *     }
 */

/**
 * @api {get} /downloadfile/version/:appname/:filename Chức năng downloadfile
 * @apiName Downloadfile
 * @apiGroup versionlist
 *
 * @apiPermission Anonymous (All) 
 * 
 * @apiError 401 không có quyền truy cập
 * @apiError 500 System error 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Not Found
 *     {
 *       "error": "Phiên làm việc hết hạn"
 *     }
 */


