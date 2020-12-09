define({ "api": [
  {
    "type": "post",
    "url": "/tdcmobileapp/create",
    "title": "Tạo mới một ứng dụng",
    "name": "CreateApp",
    "group": "AppManager",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bundleName",
            "description": "<p>mô tả hình</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iconURL",
            "description": "<p>Đường dẫn hình</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên App</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Mô tả app</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "ispublic",
            "description": "<p>được công khai hay không</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "allowedToSee[ID]",
            "description": "<p>Mảng ID những người duoc thấy</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "images[imageUrl]",
            "description": "<p>Mảng hình mô tả</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Token_login",
            "description": "<p>Token đăng nhập set ở header</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      { \"New directory successfully created }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorCreate",
            "description": "<p>ErrorCreate</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "errorPermission",
            "description": "<p>errorPermission</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>ErrorSystem</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Success\n{\n  \"file không hợp lệ chỉ chấp nhận hình ảnh\"\n}",
          "type": "json"
        },
        {
          "title": "errorPermission:",
          "content": "HTTP/1.1 400 Not Success\n{\n  \"Không có quyền\"\n}",
          "type": "json"
        },
        {
          "title": "ErrorSystem:",
          "content": "HTTP/1.1 500 Not Success\n{\n  err.message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/tdcmobileapp.js",
    "groupTitle": "AppManager"
  },
  {
    "type": "delete",
    "url": "/tdcmobileapp/delete/:name",
    "title": "Xóa app",
    "name": "DeleteApp",
    "group": "AppManager",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>ID của App muốn xóa.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Token_login",
            "description": "<p>Token đăng nhập set ở header</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n         'delete app success'\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "errorPermison",
            "description": "<p>error permison</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>errorSystem</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "errorPermiso:",
          "content": "HTTP/1.1 400 Not Success\n{\n  Không có quyền xóa\n}",
          "type": "json"
        },
        {
          "title": "errorSystem:",
          "content": "HTTP/1.1 400 Not Success\n{\n     err.message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/tdcmobileapp.js",
    "groupTitle": "AppManager"
  },
  {
    "type": "get",
    "url": "/tdcmobileapp",
    "title": "Load danh sách ứng dụng",
    "name": "LoadApp",
    "group": "AppManager",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Token_login",
            "description": "<p>Token đăng nhập set ở header(nếu có), dùng để load những ứng dụng private</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n           \"_id\": \"5f768e2581c64f18a8462081\",\n           \"bundleName\": \"fis.tdc.eLearning\",\n           \"iconURL\": \"images/icon/eLeaning_white_ios.png\",\n           \"name\": \"eLearning_\"\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>error load</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Success\n{\n  err.message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/tdcmobileapp.js",
    "groupTitle": "AppManager"
  },
  {
    "type": "get",
    "url": "/tdcmobileapp",
    "title": "Load danh sách ứng dụng mới",
    "name": "LoadNewApp",
    "group": "AppManager",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Token_login",
            "description": "<p>Token đăng nhập set ở header(nếu có), dùng để load những ứng dụng private</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n           \"_id\": \"5f768e2581c64f18a8462081\",\n           \"bundleName\": \"fis.tdc.eLearning\",\n           \"iconURL\": \"images/icon/eLeaning_white_ios.png\",\n           \"name\": \"eLearning_\"\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>error load</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Success\n{\n  err.message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/tdcmobileapp.js",
    "groupTitle": "AppManager"
  },
  {
    "type": "get",
    "url": "/tdcmobileapp/:id",
    "title": "Load chi tiết ứng dụng",
    "name": "LoadOneApp",
    "group": "AppManager",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IDApp",
            "description": "<p>ID của App</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Token_login",
            "description": "<p>Token đăng nhập set ở header(nếu có), dùng để load những ứng dụng private</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n           \"_id\": \"5f768e2581c64f18a8462081\",\n           \"bundleName\": \"fis.tdc.eLearning\",\n           \"iconURL\": \"images/icon/eLeaning_white_ios.png\",\n           \"name\": \"eLearning_\"\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>private app</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Success\n{\n  không có quyền\n}",
          "type": "json"
        },
        {
          "title": "errorlogin:",
          "content": "HTTP/1.1 401 Not Success\n{\n  \"Phiên làm việc hết hạn\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/tdcmobileapp.js",
    "groupTitle": "AppManager"
  },
  {
    "type": "get",
    "url": "/tdcmobileapp/newupdate",
    "title": "Load danh sách ứng dụng mới cập nhật",
    "name": "NewAppUpdate",
    "group": "AppManager",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Token_login",
            "description": "<p>Token đăng nhập set ở header(nếu có), dùng để load những ứng dụng private</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n           \"_id\": \"5f768e2581c64f18a8462081\",\n           \"bundleName\": \"fis.tdc.eLearning\",\n           \"iconURL\": \"images/icon/eLeaning_white_ios.png\",\n           \"name\": \"eLearning_\"\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>error load</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Success\n{\n  err.message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/tdcmobileapp.js",
    "groupTitle": "AppManager"
  },
  {
    "type": "post",
    "url": "/permison/add/:id",
    "title": "Phân quyền app cho user",
    "name": "PermisonApp",
    "group": "AppManager",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Token_login",
            "description": "<p>Token đăng nhập set ở header</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>ID App muốn phân quyền.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>tên người muốn phân quyền (req.body).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n         'Phan quyen thanh cong'\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>error load</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Success\n{\n  Your account is not have permisson\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/tdcmobileapp.js",
    "groupTitle": "AppManager"
  },
  {
    "type": "put",
    "url": "/tdcmobileapp/update/:id",
    "title": "Cập nhật app",
    "name": "UpdateApp",
    "group": "AppManager",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Token_login",
            "description": "<p>Token đăng nhập set ở header</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>ID của App muốn sửa.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bundleName",
            "description": "<p>mô tả hình</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iconURL",
            "description": "<p>Đường dẫn hình</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên App</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Mô tả app</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "ispublic",
            "description": "<p>được công khai hay không(trường nào không cập nhật để null)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n         'Update thành công'\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "errorPermison",
            "description": "<p>error permison</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>errorSystem</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Success\n{\n  Không có quyền sửa\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Not Success\n{\n     err.message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/tdcmobileapp.js",
    "groupTitle": "AppManager"
  },
  {
    "type": "post",
    "url": "/changepass/:email",
    "title": "đổi mật khẩu",
    "name": "Change_password",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token_login",
            "description": "<p>Token đăng nhập của admin set ở header</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email người dùng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mật khẩu mới(body)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK { \"Đổi mật khẩu thành công\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  'error' : 'Wrong Password'\n}",
          "type": "json"
        },
        {
          "title": "Error-System:",
          "content": "HTTP/1.1 400 Not Found\n{\n  err.message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Tạo tài khoản mới",
    "name": "CreateUser",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token_login",
            "description": "<p>Token đăng nhập của admin set ở header</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Tên người dùng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email người dùng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mật khẩu người dùng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar người dùng</p>"
          },
          {
            "group": "Parameter",
            "type": "True/False",
            "optional": false,
            "field": "gender",
            "description": "<p>Giới tính người dùng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Số điện thoại người dùng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Địa chỉ người dùng</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK { \"Tạo tài khoản thành công\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Permison:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"khong co quyen\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"Create account not success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/forgotpassword",
    "title": "gởi gmail lấy lại quên mật khẩu",
    "name": "Forgot_password",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email người dùng</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK { \"send mail thanh cong }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-System:",
          "content": "HTTP/1.1 400 Not Found\n{\n  err.message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/checkmail",
    "title": "Check Mail",
    "name": "Forgot_password",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email người dùng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number_reset",
            "description": "<p>Số xác nhận mail gởi về</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwordnew",
            "description": "<p>Mật khẩu mới</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK { \"Change password success\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Failed:",
          "content": "HTTP/1.1 400 Not Found\n{\n 'Doi mat khau khong thanh cong'\n}",
          "type": "json"
        },
        {
          "title": "Error-System:",
          "content": "HTTP/1.1 400 Not Found\n{\n 'ma xac thuc khong hop le'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/getuser",
    "title": "lấy thông tin tên tk",
    "name": "Get_Iformation_user",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token_login",
            "description": "<p>Token đăng nhập (Set ở header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     HTTP/1.1 200 OK\n{  \n    \"_id\": \"5fc47c140bf3be0ab02925c9\",\n    \"username\": \"nhozlong123\",\n    \"email\": \"nguyenlong08112000@gmail.com\",\n    \"phone\": \"0388049594\",\n    \"gender\": true,\n    \"address\": \"Bình Chánh,Tp Hồ Chí Minh\",\n    \"avatar\": \"images/avatar/images.png\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  err.message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Đăng nhập",
    "name": "Login",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email người dùng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mật khẩu người dùng</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK \n    {\n    \"token_login\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ndXllbmxvbmcwODExMjAwMEBnbWFpbC5jb20iLCJyb2xlaWQiOiI1ZmE0ZjY3YzFhYjcyZDExZmM1MmM2YmQiLCJ1c2VybmFtZSI6Im5ob3psb25nMTIzIiwiaWF0IjoxNjA2OTc5MjIwfQ._NF6IFUv5gbin8dS0Kpj3b-VsIWXwogEuk1Qdh4Lz9E\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n    \"Sai email !!!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n    \"Tai khoan bi vo hieu hoa\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n    \"Wrong password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/logout",
    "title": "đăng xuất",
    "name": "Logout",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token_login",
            "description": "<p>Token đăng nhập của admin set ở header</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     HTTP/1.1 200 OK\n{  \n    \"Logout success !!!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  err.message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/update",
    "title": "Cập nhật thông tin người dùng",
    "name": "Update_Information_User",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token_login",
            "description": "<p>Token đăng nhập của admin set ở header</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Tên người dùng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar người dùng</p>"
          },
          {
            "group": "Parameter",
            "type": "True/False",
            "optional": false,
            "field": "gender",
            "description": "<p>Giới tính người dùng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Số điện thoại người dùng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Địa chỉ người dùng (Fields nào không cập nhật, không gởi đi)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     HTTP/1.1 200 OK\n{  \n    \"Update success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  err.message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/tdcmobileapp/versionlist/create/:id",
    "title": "Chức năng tạo version theo app",
    "name": "Create_AVersionApp",
    "group": "versionlist",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": ":id",
            "description": "<p>(Header) xác định version sắp được tạo là của app nào. App này phải đang tồn tại trong database.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>(Body) Tên của version đang được tạo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "android",
            "description": "<p>(Body) File android của version đang được tạo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ios",
            "description": "<p>(Body) File IOS của version đang được tạo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descripstion",
            "description": "<p>(Body) Mô tả của version đang được tạo</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      { \"Insert success !!!\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>không có quyền truy cập</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>System error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"Phiên làm việc hết hạn\"\n}",
          "type": "json"
        },
        {
          "title": "Error-System:",
          "content": "HTTP/1.1 500 Not Found\n{\n  err.message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/applist.js",
    "groupTitle": "versionlist"
  },
  {
    "type": "delete",
    "url": "/tdcmobileapp/versionlist/delete/:id",
    "title": "Chức năng delete một version bất kỳ",
    "name": "Delete_AVersionApp",
    "group": "versionlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": ":id",
            "description": "<p>(Header) xác định version cần được delete. App này phải đang tồn tại trong database.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      { \"Delete version success !!\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>không có quyền truy cập</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>System error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"Phiên làm việc hết hạn\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/applist.js",
    "groupTitle": "versionlist"
  },
  {
    "type": "get",
    "url": "/downloadfile/version/:appname/:filename",
    "title": "Chức năng downloadfile",
    "name": "Downloadfile",
    "group": "versionlist",
    "permission": [
      {
        "name": "Anonymous (All)"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>không có quyền truy cập</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>System error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"error\": \"Phiên làm việc hết hạn\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/applist.js",
    "groupTitle": "versionlist"
  },
  {
    "type": "get",
    "url": "/tdcmobileapp/versionlist/:idapp",
    "title": "Chức năng lấy thông tin của tất cả version của một app bất kì",
    "name": "GetInfo_AllVersionsOfAnApp",
    "group": "versionlist",
    "permission": [
      {
        "name": "Anonymous (All)"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": ":idapp",
            "description": "<p>(Header) xác định version cần được trả về là của app nào. App này phải đang tồn tại trong database.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n         [\n           {\n               \"_id\": \"5fbe22b656c4642a786e1c9b\",\n               \"version\": \"0.1\",\n               \"descripstion\": \"- Chức năng gì đó được bổ sung và chiếm độ dài như thế này<br> - Cải thiện hiệu năng gì đó để app trở nên ngon lành cành đào<br> - Chức năng này mô tả ngắn\",\n               \"android\": \"https://apps.fis.vn/downloadfile/version/Boston_TDV/boston_tdv_v0.1.apk\",\n               \"ios\": \"itms-services://?action=download-manifest&url=https://apps.fis.vn/downloadfile/version/Boston_TDV/Boston_TDV_0.1.plist\",\n               \"created_at\": \"2020-11-25T09:24:06.576Z\"\n           },\n           {\n               \"_id\": \"5fbe232956c4642a786e1c9c\",\n               \"version\": \"0.2\",\n               \"descripstion\": \"- Chức năng gì đó được bổ sung và chiếm độ dài như thế này<br> - Cải thiện hiệu năng gì đó để app trở nên ngon lành cành đào<br> - Chức năng này mô tả ngắn\",\n               \"android\": \"https://apps.fis.vn/downloadfile/version/Boston_TDV/boston_tdv_v0.2.apk\",\n               \"ios\": \"itms-services://?action=download-manifest&url=https://apps.fis.vn/downloadfile/version/Boston_TDV/Boston_TDV_0.2.plist\",\n               \"created_at\": \"2020-11-25T09:26:01.812Z\"\n           }\n         ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>System error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"Error\": Phiên làm việc hết hạn\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Not Found\n{\n  \"Oop Someting went wrong try again later !!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/applist.js",
    "groupTitle": "versionlist"
  },
  {
    "type": "post",
    "url": "/tdcmobileapp/versionlist/update/:idapp/:idversion",
    "title": "Chức năng update một version của một app",
    "name": "Update_AVersionApp",
    "group": "versionlist",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": ":idapp",
            "description": "<p>(Header) xác định version đang được sửa là của app nào. App này phải đang tồn tại trong database.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": ":idversion",
            "description": "<p>(Header) xác định version đang được sửa là cái nào. Version này phải đang tồn tại trong database.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>(Body) Tên của version đang được sửa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "android",
            "description": "<p>(Body) File android của version đang được sửa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ios",
            "description": "<p>(Body) File IOS của version đang được sửa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descripstion",
            "description": "<p>(Body) Mô tả của version đang được sửa</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      { \"Update complete !!!\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>không có quyền truy cập</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>System error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"Phiên làm việc hết hạn\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidata/applist.js",
    "groupTitle": "versionlist"
  }
] });
