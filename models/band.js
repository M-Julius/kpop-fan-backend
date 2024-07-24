const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Band = sequelize.define('Band', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  photoGroup: {
    type: DataTypes.JSON,
    allowNull: true
  },
  members: {
    type: DataTypes.JSON,
    allowNull: true
  },
  playlist: {
    type: DataTypes.JSON,
    allowNull: true
  },
});

module.exports = Band;
