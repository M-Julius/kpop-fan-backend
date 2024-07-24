const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Band = require('./band');

const Event = sequelize.define('Event', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  bandId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'bands',
      key: 'id',
    },
  },
  photos: {
    type: DataTypes.JSON,
    allowNull: true,
  },
});

Event.belongsTo(Band, { foreignKey: 'bandId' });


module.exports = Event;
