'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile, {foreignKey: 'userId'})
      User.hasMany(models.Disease, {foreignKey: 'userId'})
    }

    checkPassword(password) {return bcrypt.compareSync(password, this.password)}
  }
  User.init({
    email: 
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {isEmail: true, notEmpty: true}
    },
    password: 
    {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {len: [8]}
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: async (user) => {
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)
      },
      beforeUpdate: async (user) => {
        if (user.changed('password')) {
          const salt = await bcrypt.genSalt(10)
          user.password = await bcrypt.hash(user.password, salt)
        }
      }
    }
  });
  return User;
};