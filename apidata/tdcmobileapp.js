/**
 * @api {post} /tdcmobileapp/create Tạo mới một ứng dụng
 * @apiName CreateApp
 * @apiGroup AppManager
 *
 * @apiPermission admin
 * 
 *@apiParam {String} bundleName mô tả hình
 *@apiParam {String} iconURL Đường dẫn hình
 *@apiParam {String} name Tên App
 *@apiParam {String} description Mô tả app
 *@apiParam {Boolean} ispublic được công khai hay không
 *@apiParam {Array} allowedToSee[ID] Mảng ID những người duoc thấy
 *@apiParam {Array} images[imageUrl] Mảng hình mô tả
  *@apiParam {String} Token_login Token đăng nhập set ở header

 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 *              HTTP/1.1 200 OK
                   { "New directory successfully created }
 *
 *
 *
 * @apiError ErrorCreate ErrorCreate 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Success
 *     {
 *       "file không hợp lệ chỉ chấp nhận hình ảnh"
 *     }
 * * @apiError errorPermission errorPermission
 *
 * @apiErrorExample errorPermission:
 *     HTTP/1.1 400 Not Success
 *     {
 *       "Không có quyền"
 *     }
 * 
 *  @apiError Error ErrorSystem 
 *  @apiErrorExample ErrorSystem:
 *     HTTP/1.1 500 Not Success
 *     {
 *       err.message
 *     }
 */

/**
 * @api {get} /tdcmobileapp/newupdate Load danh sách ứng dụng mới cập nhật
 * @apiName NewAppUpdate
 * @apiGroup AppManager
 *
 * @apiPermission everyone
 * 
 *@apiParam {String} Token_login Token đăng nhập set ở header(nếu có), dùng để load những ứng dụng private
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 *              HTTP/1.1 200 OK
                   {
                        "_id": "5f768e2581c64f18a8462081",
                        "bundleName": "fis.tdc.eLearning",
                        "iconURL": "images/icon/eLeaning_white_ios.png",
                        "name": "eLearning_"
                    }
 *
 *
 *
 * @apiError error error load
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Success
 *     {
 *       err.message
 *     }
 */

 /**
 * @api {get} /tdcmobileapp Load danh sách ứng dụng 
 * @apiName LoadApp
 * @apiGroup AppManager
 *
 * @apiPermission everyone
 * 
 *@apiParam {String} Token_login Token đăng nhập set ở header(nếu có), dùng để load những ứng dụng private
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 *              HTTP/1.1 200 OK
                   {
                        "_id": "5f768e2581c64f18a8462081",
                        "bundleName": "fis.tdc.eLearning",
                        "iconURL": "images/icon/eLeaning_white_ios.png",
                        "name": "eLearning_"
                    }
 *
 *
 *
 * @apiError error error load
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Success
 *     {
 *       err.message
 *     }
 */

 /**
 * @api {get} /tdcmobileapp Load danh sách ứng dụng mới
 * @apiName LoadNewApp
 * @apiGroup AppManager
 *
 * @apiPermission everyone
 * 
 *@apiParam {String} Token_login Token đăng nhập set ở header(nếu có), dùng để load những ứng dụng private
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 *              HTTP/1.1 200 OK
                   {
                        "_id": "5f768e2581c64f18a8462081",
                        "bundleName": "fis.tdc.eLearning",
                        "iconURL": "images/icon/eLeaning_white_ios.png",
                        "name": "eLearning_"
                    }
 *
 *
 *
 * @apiError error error load
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Success
 *     {
 *       err.message
 *     }
 */

 /**
 * @api {get} /tdcmobileapp/:id Load chi tiết ứng dụng 
 * @apiName LoadOneApp
 * @apiGroup AppManager
 *
 * @apiPermission everyone
 * 
 *@apiParam {String} IDApp ID của App
 *@apiParam {String} Token_login Token đăng nhập set ở header(nếu có), dùng để load những ứng dụng private
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 *              HTTP/1.1 200 OK
                   {
                        "_id": "5f768e2581c64f18a8462081",
                        "bundleName": "fis.tdc.eLearning",
                        "iconURL": "images/icon/eLeaning_white_ios.png",
                        "name": "eLearning_"
                    }
 *
 *
 *
 * @apiError error private app
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Success
 *     {
 *       không có quyền
 *     }
 * @apiError error errorlogin(private app)
 *
 * @apiErrorExample errorlogin:
 *     HTTP/1.1 401 Not Success
 *     {
 *       "Phiên làm việc hết hạn"
 *     }
 */

/**
 * @api {post} /permison/add/:id Phân quyền app cho user
 * @apiName PermisonApp
 * @apiGroup AppManager
 *
 * @apiPermission admin
 * 
 *@apiParam {String} Token_login Token đăng nhập set ở header
 *@apiParam {String} ID ID App muốn phân quyền.
 *@apiParam {String} username tên người muốn phân quyền (req.body).
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 *              HTTP/1.1 200 OK
                   {
                      'Phan quyen thanh cong'
                    }
 *
 *
 *
 * @apiError error error load
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Success
 *     {
 *       Your account is not have permisson
 *     }
 */

 /**
 * @api {delete} /tdcmobileapp/delete/:name Xóa app
 * @apiName DeleteApp
 * @apiGroup AppManager
 *
 * @apiPermission admin
 * 
 *@apiParam {String} Id ID của App muốn xóa.
  *@apiParam {String} Token_login Token đăng nhập set ở header
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 *              HTTP/1.1 200 OK
                   {
                      'delete app success'
                    }
 *
 *
 *
 * @apiError errorPermison error permison
 *
 * @apiErrorExample errorPermiso:
 *     HTTP/1.1 400 Not Success
 *     {
 *       Không có quyền xóa
 *     }
 * 
 * @apiError error errorSystem
 *
 * @apiErrorExample errorSystem:
 *     HTTP/1.1 400 Not Success
 *     {
 *          err.message
 *     }
 */

 /**
 * @api {put} /tdcmobileapp/update/:id Cập nhật app
 * @apiName UpdateApp
 * @apiGroup AppManager
 *
 * @apiPermission admin
 * 
*@apiParam {String} Token_login Token đăng nhập set ở header
 *@apiParam {String} Id ID của App muốn sửa.
 *@apiParam {String} bundleName mô tả hình
 *@apiParam {String} iconURL Đường dẫn hình
 *@apiParam {String} name Tên App
 *@apiParam {String} description Mô tả app
 *@apiParam {Boolean} ispublic được công khai hay không(trường nào không cập nhật để null) 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 *              HTTP/1.1 200 OK
                   {
                      'Update thành công'
                    }
 *
 *
 *
 * @apiError errorPermison error permison
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Success
 *     {
 *       Không có quyền sửa
 *     }
 * 
 * @apiError error errorSystem
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Not Success
 *     {
 *          err.message
 *     }
 */