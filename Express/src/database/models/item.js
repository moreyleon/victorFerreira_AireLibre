'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.Invoice, {
        as: 'invoice',
        foreignKey: 'invoicesId'
      });
      Item.belongsTo(models.Product, {
        as: 'product',
        foreignKey: 'productId'
      });
    }
  }
  Item.init({
    invoicesId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};