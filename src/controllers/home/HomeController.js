const mysql = require('../../db');



console.log(mysql);



class HomeCtroller {

  //首页展示
   indexPage() {
      return async (ctx, next) => {
        let data = await mysql.query('select * from article_list');
          await ctx.render('index',{data})
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