'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('password', 10);
    return queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        role: 'admin',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user1',
        password: hashedPassword,
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
