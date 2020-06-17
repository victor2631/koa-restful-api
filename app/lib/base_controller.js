class BaseController {

  constructor(ctx) {
    this.ctx = ctx
    this.input = this.inputContext(ctx)

  }

  // 认证请求用户的身份
  async auth (ctx) {

    let token = ctx.header['x-token']
    let res = await this.checkToken(token)

    if (!res) {

      return this.output({}, "auth fail", -1001)

    }

  }

  /**
   * 查看token值是否对应
   * @param {String} token 
   */
  async checkToken (token) {
    return !!token
  }

  /**
   * 输出内容通用方法
 * @param {*} data 数据内容
 * @param {*} msg 描述
 * @param {*} code 状态码
 */
  async output (data, msg = "", code = 0) {
    let json = {};
    json.code = code;
    json.data = data != undefined ? data : {};
    json.msg = msg;
    this.ctx.body = JSON.stringify(json);
  }

  /**
   * 转换输入的内容请求方式
   * @param {*} ctx 
   */
  inputContext (ctx) {
    let data = {}

    switch (ctx.method) {
      case 'GET':
        Object.assign(data, ctx.request.query)
        break;
      case 'PUT':
        break;
      case 'POST':
        Object.assign(data, ctx.request.body)
        break;
    }

    return data;
  }

}

module.exports = BaseController