'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Product.belongsTo(models.Category, {
        as: 'category',
        foreignKey: 'categoryId'
      });

      Product.belongsTo(models.Brand, {
        as: 'brand',
        foreignKey: 'brandId'
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    size: DataTypes.INTEGER,
    image: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    news:DataTypes.STRING,
    offers:DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};