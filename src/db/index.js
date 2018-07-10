const mysql = require('promise-mysql');

module.exports = {
  query(sql) {
    const pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'project_blog',
      connectionLimit: 10
    });

    return pool.getConnection().then(connection => {
      return connection.query(sql);
    }).catch((err) => {
      console.log('query err'+errr);
    })
  }
}