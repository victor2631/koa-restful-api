const Koa = require('koa')
const app = new Koa()

const env = process.env.NODE_ENV
const port = 8000

const route = require('./app/routes')

if (env === 'development') {

  // 生成接口文档
  const apiDocUtil = require('./utils/buildApidoc')
  apiDocUtil.buildDoc()

  // 设置静态文件目录
  const static = require('koa-static')
  app.use(static(__dirname + '/public'))

}


app.use(route.routes())

app.listen(port, () => {
  console.log('server listening on port:', port)
})

//监听error 事件
app.on('error', (err, ctx) => {
  console.log('error info:', err)
})