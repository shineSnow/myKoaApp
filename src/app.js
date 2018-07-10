const koa = require('koa');
const app = new koa();
const fs = require('fs');
const views = require('koa-views');
const static = require('koa-static');
const ejs = require('ejs');
const path = require('path');
const router = require('./router');

console.log(__dirname + '/views')

//静态文件
app.use(static(path.join(__dirname,'/public')));
//设置模板引擎
app.use(views(__dirname + '/views',{
  map : {html:'ejs'}
}));


//设置路由
app.use(router.routes());
// app.use(router.allowedMethods());

//错误处理
app.on('error',(err,ctx) => {
  console.log(err);
  ctx.render('err',{message: '服务错误!',error:err})
})


app.listen(3000);