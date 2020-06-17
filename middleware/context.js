
/**
 * 请求参数转换
 */
async function input (ctx) {
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

  ctx.input = data;
}

/**
 * 返回数据方法
 */
async function output (ctx) {
  /**
   * @param {*} data 数据内容
   * @param {*} msg 描述
   * @param {*} code 状态码
   */
  let a = function (data, msg = "", code = 0) {
      let json = {};
      json.code = code;
      json.data = data != undefined ? data : {};
      json.msg = msg;
      ctx.body = JSON.stringify(json);
  }
  ctx.output = a;
}

/**
 * 对输入输出内容方式进行转换
 * @param {*} ctx 
 * @param {*} next 
 */
module.exports = async function (ctx, next) {

  await input(ctx)

  await output(ctx)

}