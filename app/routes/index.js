const Router = require('koa-router')()

const exampleModel = require('./models/example.model.js')
const routeList = [
  ...exampleModel
]


for (let i = 0; i < routeList.length; i++) {

  let model = routeList[i]

  if (model.list && model.list.length > 0) {

    for (let j = 0; j < model.list.length; j++) {

      let p = model.list[j]

      // 注册路由
      createAction(Router, p.url, p.method, model.controller, p.actionName)
    }
  }
}

/**
 *
 * @param {*} router router
 * @param {*} url api url
 * @param {*} controller 该api的controller类
 * @param {*} method 请求接口的方法类型 , post get put delete ...
 * @param {*} actionName controller中的方法名
 */
function createAction (router, url, method, controller, actionName) {

  router[method](url, async ctx => {
    let contr = new controller(ctx)

    try {

      // 执行对应的方法
      await contr[actionName].call(contr,ctx)

    } catch (err) {

      console.log('router:',err)
      ctx.body = {code:"-1",msg:"error"}

    }
  })

}

module.exports = Router