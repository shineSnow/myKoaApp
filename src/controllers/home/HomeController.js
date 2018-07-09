const mysql = require('../../db');
const path = require('path');



class HomeCtroller {

  //首页展示
   indexPage() {
    // let data = await mysql.query('select * from article_list');
      return async (ctx, next) => {
          await ctx.render('index',{data:'hello'})
      }
  }

  //关于我们
  aboutpage() {
    return async (ctx,next) => {
      await ctx.render('about')
    }
  }
  

}

module.exports = new HomeCtroller();