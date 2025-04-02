'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.User,{
        as:'rol',
        foreignKey:'rolId'
      
    });
    User.hasMany(models.Address,{
      as:'addresses',
      foreignKey:'userId' 
    });
    User.hasMany(models.Invoice,{
      as:'invoices',
      foreignKey:'userId'
  })

}
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    rolId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
    underscored: false
  });
  return User;
};