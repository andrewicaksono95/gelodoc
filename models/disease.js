'use strict';
const {
  Model
} = require('sequelize');
const { mergeDefaults } = require('sequelize/lib/utils');
module.exports = (sequelize, DataTypes) => {
  class Disease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Disease.belongsTo(models.User, {foreignKey: 'userId'})
      Disease.belongsToMany(models.Symptom, {through: models.DiseaseSymptom, foreignKey: 'diseaseId'})
    }
  }
  Disease.init({
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    level: {type: DataTypes.INTEGER, allowNull: false, validate: {min: 1}},
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Disease',
  });
  return Disease;
};