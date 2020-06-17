const BaseController = require('../lib/base_controller')

class Controller extends BaseController {

  constructor(ctx) {
    super(ctx)

    this.isAuth = true
  }


  /**
   * @api {get} /api/test/v1/:id 获取一条实例数据
   * @apiVersion 0.0.1
   * @apiName getTest
   * @apiPermission private
   * @apiDescription 获取数据实例信息
   * @apiGroup test
   * 
   * @apiHeader {String} x-token 用户token
   * 
   * @apiParam {Number} id 测试实例的id
   * 
   * @apiSuccess {String} name 名字
   * @apiSuccess {Number} age 年龄
   * 
   * @apiSuccessExample {json} Success-Response:
   * {"code":0,"data":{},"msg":"请求成功"}
   * 
   * @apiErrorExample {json} Error-Response:
   * {"code":-1001,"data":{},"msg":"没有操作权限"}
   */
  async getData (ctx) {

    let params = ctx.params
    let id = params.id

    return this.output({name:"张三",age:18}, `请求id：${id}`)

  }

  /**
 * @api {post} /api/test/v1/  新增一条实例数据
 * @apiName postTest
 * @apiPermission private
 * @apiDescription 新增一条数据
 * @apiGroup test
 * @apiVersion 0.0.1
 * 
 * @apiHeader {String} x-token 用户token
 * 
 * @apiParam {String} name 名字 unique ID
 * @apiParam {Number} age=18 年龄
 * 
 * @apiSuccess {Number} id id
 * @apiSuccess {String} name 名字
 * @apiSuccess {Number} age 年龄
 * 
 * @apiSuccessExample {json} Success-Response:
 * {"err":0,"data":{"id":1,"name":"张三","age":18},"msg":"请求成功"}
 * 
 * @apiErrorExample {json} Error-Response:
 * {"err":-1001,"data":{},"msg":"没有操作权限"}
 */
  async addData (ctx) {
    this.auth(ctx)

    return this.output({}, "test请求")
  }



}

module.exports = Controller