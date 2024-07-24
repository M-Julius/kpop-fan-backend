const sequelize = require('../config/database');
const Band = require('./band');
const Event = require('./event');
const Schedule = require('./schedule');
const User = require('./user');

module.exports = {
  sequelize,
  Band,
  Event,
  Schedule,
  User,
};
