/** 生成apidoc */

const apidoc = require('apidoc')

//配置参数
const options = {
  file_filters: '.*\\.js$" -f ".*\\.ts$',     //指定读取文件的文件名过滤正则表达式
  input: './app/controller',                  //指定读取源文件的目录
  output: './public/apidocs',                 //指定输出文档的目录
  config: './config/conf.apidoc.js',          //指定配置文件目录
  simulate:false,
  parse:false
}

/**
 * 生成方法
 * @param {*} opt
 */
function buildFunc (opt) {

  var _opt = Object.assign({
    dest: opt.output,
    src: opt.input
  },
    opt);

  if (_opt.src) {

    var chunk = apidoc.createDoc(_opt);

    if (typeof chunk === 'object') {
      console.info('apidoc created... [' + JSON.parse(chunk.project).name + ']')

    } else if (chunk === true) {
      console.info('apidoc created... ')

    } else {
      console.error('Execution terminated (set \" debug: true \" in gulpfile.js for details.')

    }

  } else {
    console.warn('apidoc build no output path')
  }
}

module.exports = {
  buildDoc: ()=> {
    buildFunc(options)
  }
}