const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const tableName = 'menus';

const Menu = sequelize.define('Menu', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING
  },
  subtitle: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING
  },
}, { tableName });

// eslint-disable-next-line
Menu.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  return values;
};

module.exports = Menu;
