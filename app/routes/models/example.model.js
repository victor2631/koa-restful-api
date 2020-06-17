
module.exports = [
  {
    // 路由的控制器
    "controller": require('../../controller/example.controller'),

    // 路由的地址，请求方式，控制器中的方法
    "list": [
      { "url": "/api/test/v1/:id", "method": "get", "actionName": "getData" },
      { "url": "/api/test/v1/", "method": "post", "actionName": "addData" }
    ]
  }
]