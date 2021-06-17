const development = {
  database: 'assignment',
  username: 'admin',
  password: '011235813',
  host: 'urmenudb.cnagjj3ksizw.ap-southeast-2.rds.amazonaws.com',
  dialect: 'mysql',
};

const testing = {
  database: 'assignment',
  username: 'admin',
  password: '011235813',
  host: 'urmenudb.cnagjj3ksizw.ap-southeast-2.rds.amazonaws.com',
  dialect: 'mysql',
};

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'urmenudb.cnagjj3ksizw.ap-southeast-2.rds.amazonaws.com',
  dialect: 'sqlite' || 'mysql' || 'postgres',
};

module.exports = {
  development,
  testing,
  production,
};
