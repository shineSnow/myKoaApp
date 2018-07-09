const mysql = require('promise-mysql');

module.exports = class {
  constructor() {
    this.poll = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'project_blog',
      connectionLimit: 10,
    })
  }
  query(sql) {
   this.poll.getConnection().then(connection => {
     return connection.query(sql);
   }).catch(err => {
     console.log('query err'+err);
   })
  }
}