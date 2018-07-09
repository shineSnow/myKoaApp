const Router = require('koa-router');
const router = new Router();
const usersctrl = require('../controllers/users/UserController');
const homectrl = require('../controllers/home/HomeController');



router

      //首页展示
      .get('/', homectrl.indexPage()) //首页展示数据
      .get('/index', homectrl.indexPage()) //首页展示数据
      .get('/about',homectrl.aboutpage());
      //用户模块api
      // .post('/api/user/login',usersctrl.login)              //用户登录
      // .post('/api/user/register',usersctrl.register)        //用户注册
      // .get('/api/user/logout',usersctrl.logout)             //用户退出    


module.exports=router