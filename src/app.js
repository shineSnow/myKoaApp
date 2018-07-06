const koa = require('koa');
const app = new koa();
const fs = require('fs')

app.use(async ctx => {
  console.log(ctx.request.path);
  ctx.response.type='html';
  ctx.response.body = fs.createReadStream('./pages/index.html'); 
})

app.listen(3000);
console.log(koa)