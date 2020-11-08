'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('budget_projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      work_order_number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      notification_number : {
        allowNull : false,
        type : Sequelize.STRING,
      },
      budget_disciplines_id : {
        allowNull : false,
        type : Sequelize.INTEGER
      },
      wbs_id : {
        allowNull : false,
        type : Sequelize.INTEGER
      },
      actual : {
        defaultValue : 0,
        type : "BIGINT"
      },
      commitment : {
        defaultValue : 0,
        type : "BIGINT"
      },
      remain_plan : {
        defaultValue : 0,
        type : "BIGINT"
      },
      system_status : {
        allowNull : true,
        type : Sequelize.STRING
      },
      start_date : {
        allowNull : false,
        type : 'DATE'
      },
      actual_finish : {
        allowNull : true,
        type : "DATE"
      },
      actual_release : {
        allowNull : true,
        type : "DATE"
      },
      priority : {
        allowNull : true,
        type : Sequelize.INTEGER
      },
      created_date : {
        allowNull : false,
        type : 'DATE'
      },
      changed_date : {
        allowNull : true,
        type : 'DATE'
      },
      initial_year : {
        allowNull : false,
        type : Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('budget_projects');
  }
};