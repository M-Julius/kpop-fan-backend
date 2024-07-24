'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Schedules', [
      {
        bandId: 1,
        date: new Date('2023-09-20'),
        location: 'Seoul, South Korea',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bandId: 2,
        date: new Date('2023-10-15'),
        location: 'Seoul, South Korea',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Schedules', null, {});
  }
};
