'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class budget_projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  budget_projects.init({
    work_order_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'budget_projects',
  });
  return budget_projects;
};