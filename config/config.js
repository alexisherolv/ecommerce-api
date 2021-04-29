require('dotenv').config();

const defaultConfig = {
  username: process.env.MYSQLDB_USER,
  password: process.env.MYSQLDB_PASSWORD,
  database: process.env.MYSQLDB_DATABASE,
  host: process.env.MYSQLDB_HOST,
  port: process.env.MYSQLDB_PORT,
  dialect: 'mysql',
};

module.exports = {
  development: defaultConfig,
  production: Object.assign(defaultConfig, {
    /** You can override the default config here */
  }),
};

/*{
    "development": {
      "username": "root",
      "password": "06/05/06ac",
      "database": "ecommerceapi",
      "host": "127.0.0.1",
      "port": "3306",
      "dialect": "mysql"
    }
  }*/