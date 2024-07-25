'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
        title: 'Seventeen Concert 2023',
        description: 'Seventeen World Tour 2023 in Seoul.',
        date: new Date('2023-09-20'),
        bandId: 1,
        photos: JSON.stringify([
          'uploads/event1-photo1.jpg',
          'uploads/event1-photo2.jpg'
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'ATEEZ Concert 2023',
        description: 'ATEEZ World Tour 2023 in Seoul.',
        date: new Date('2023-10-15'),
        bandId: 2,
        photos: JSON.stringify([
          'uploads/event2-photo1.jpg',
          'uploads/event2-photo2.jpg'
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
