/**
 * @api {post} /register Tạo tài khoản mới
 * @apiName CreateUser
 * @apiGroup User
 * 
 * @apiPermission admin
 * 
 * @apiParam {String} token_login Token đăng nhập của admin set ở header
 * 
 * @apiParam {String} username Tên người dùng
 * @apiParam {String} email Email người dùng
 * @apiParam {String} password Mật khẩu người dùng 
 * @apiParam {String} avatar Avatar người dùng
 * @apiParam {True/False} gender Giới tính người dùng
 * @apiParam {String} phone Số điện thoại người dùng
 * @apiParam {String} address Địa chỉ người dùng 
 * 
 *          
 * @apiSuccessExample {json} Success-Response:
 *              HTTP/1.1 200 OK { "Tạo tài khoản thành công" }
 *
 * @apiErrorExample Error-Permison:
 *     HTTP/1.1 400 Not Found
 *     {
 *       "khong co quyen"
 *     }
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *       "Create account not success"
 *     }
 */

 /**
  * @api {post} /login Đăng nhập
  * @apiName Login
  * @apiGroup User
  * 
  * @apiPermission user
  * 
  * @apiParam {String} email Email người dùng
  * @apiParam {String} password Mật khẩu người dùng
  * 
  * @apiSuccessExample {json} Success-Response:
  *         HTTP/1.1 200 OK 
  *             {
  *             "token_login": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ndXllbmxvbmcwODExMjAwMEBnbWFpbC5jb20iLCJyb2xlaWQiOiI1ZmE0ZjY3YzFhYjcyZDExZmM1MmM2YmQiLCJ1c2VybmFtZSI6Im5ob3psb25nMTIzIiwiaWF0IjoxNjA2OTc5MjIwfQ._NF6IFUv5gbin8dS0Kpj3b-VsIWXwogEuk1Qdh4Lz9E"
  *             }
  * 
  * @apiErrorExample Error-Response:
  *         HTTP/1.1 400 Not Found
  *         {
  *             "Sai email !!!"
  *         }
  * 
  *  @apiErrorExample Error-Response:
  *         HTTP/1.1 400 Not Found
  *         {
  *             "Tai khoan bi vo hieu hoa"
  *         }
  * 
  *  @apiErrorExample Error-Response:
  *         HTTP/1.1 400 Not Found
  *         {
  *             "Wrong password"
  *         }
  */

  /**
   * @api {get} /user/getuser lấy thông tin tên tk
   * @apiName Get Iformation user
   * @apiGroup User
   * @apiPermission user
   * 
   * @apiParam {String} token_login Token đăng nhập (Set ở header)
   *  @apiSuccessExample {json} Success-Response:
   *              HTTP/1.1 200 OK
        {  
            "_id": "5fc47c140bf3be0ab02925c9",
            "username": "nhozlong123",
            "email": "nguyenlong08112000@gmail.com",
            "phone": "0388049594",
            "gender": true,
            "address": "Bình Chánh,Tp Hồ Chí Minh",
            "avatar": "images/avatar/images.png"
        } 
    *
    @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       err.message
*     }
   */

   /**
    * @api {post} /user/update Cập nhật thông tin người dùng
    * @apiName Update Information User
    * @apiGroup User
    * @apiPermission user
    * 
    * @apiParam {String} token_login Token đăng nhập của admin set ở header
    * @apiParam {String} username Tên người dùng
    * @apiParam {String} avatar Avatar người dùng
    * @apiParam {True/False} gender Giới tính người dùng 
    * @apiParam {String} phone Số điện thoại người dùng
    * @apiParam {String} address Địa chỉ người dùng (Fields nào không cập nhật, không gởi đi)
    * 
    * @apiSuccessExample {json} Success-Response:
   *              HTTP/1.1 200 OK
        {  
            "Update success"
        } 
    *
    *     @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       err.message
*     }
    */

    /**
     * @api {post} /logout đăng xuất
    * @apiName Logout
    * @apiGroup User
    * 
    * @apiPermission user
    * 
    * @apiParam {String} token_login Token đăng nhập của admin set ở header
    * 
    *  @apiSuccessExample {json} Success-Response:
   *              HTTP/1.1 200 OK
        {  
            "Logout success !!!"
        } 
    * 
    @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       err.message
*     }
     */

/**
 * @api {post} /changepass/:email đổi mật khẩu
 * @apiName Change password
 * @apiGroup User
 * 
 * @apiPermission user
 * 
 * @apiParam {String} token_login Token đăng nhập của admin set ở header
 * @apiParam {String} email Email người dùng
 * @apiParam {String} password Mật khẩu mới(body)
 *          
 * @apiSuccessExample {json} Success-Response:
 *              HTTP/1.1 200 OK { "Đổi mật khẩu thành công" }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *       'error' : 'Wrong Password'
 *     }
 * 
 * @apiErrorExample Error-System:
 *     HTTP/1.1 400 Not Found
 *     {
 *       err.message
 *     }
 */

/**
 * @api {post} /forgotpassword gởi gmail lấy lại quên mật khẩu
 * @apiName Forgot password
 * @apiGroup User
 * 
 * @apiPermission user
 * 
 * @apiParam {String} email Email người dùng
 *          
 * @apiSuccessExample {json} Success-Response:
 *              HTTP/1.1 200 OK { "send mail thanh cong }
 *
 * @apiErrorExample Error-System:
 *     HTTP/1.1 400 Not Found
 *     {
 *       err.message
 *     }
 */
/**
 * @api {post} /checkmail Check Mail
 * @apiName Forgot password
 * @apiGroup User
 * 
 * @apiPermission user
 * 
 * @apiParam {String} email Email người dùng
 * @apiParam {String} number_reset Số xác nhận mail gởi về
 * @apiParam {String} passwordnew Mật khẩu mới
 *          
 * @apiSuccessExample {json} Success-Response:
 *              HTTP/1.1 200 OK { "Change password success"}
 *
 * @apiErrorExample Error-Failed:
 *     HTTP/1.1 400 Not Found
 *     {
 *      'Doi mat khau khong thanh cong'
 *     }
 * @apiErrorExample Error-System:
 *     HTTP/1.1 400 Not Found
 *     {
 *      'ma xac thuc khong hop le'
 *     }
 */