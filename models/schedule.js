const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Band = require('./band');

const Schedule = sequelize.define('Schedule', {
  bandId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Schedule.belongsTo(Band, { foreignKey: 'bandId' });

module.exports = Schedule;
