'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bands', [
      {
        name: 'Seventeen',
        description: 'Seventeen is a South Korean boy band formed by Pledis Entertainment.',
        photoGroup: JSON.stringify([
          '/uploads/photo1.jpg',
          '/uploads/photo2.jpg',
          '/uploads/photo3.jpg'
        ]),
        members: JSON.stringify([
          { name: 'S.Coups', role: 'Leader' },
          { name: 'Jeonghan', role: 'Lead Vocalist' },
          { name: 'Joshua', role: 'Vocalist' }
        ]),
        playlist: JSON.stringify([
          { song: 'Pretty U', url: 'https://example.com/pretty-u' },
          { song: 'Adore U', url: 'https://example.com/adore-u' }
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ATEEZ',
        description: 'ATEEZ is a South Korean boy band formed by KQ Entertainment.',
        photoGroup: JSON.stringify([
          '/uploads/photo4.jpg',
          '/uploads/photo5.jpg',
          '/uploads/photo6.jpg'
        ]),
        members: JSON.stringify([
          { name: 'Hongjoong', role: 'Leader' },
          { name: 'Seonghwa', role: 'Vocalist' },
          { name: 'Yunho', role: 'Vocalist' }
        ]),
        playlist: JSON.stringify([
          { song: 'Wonderland', url: 'https://example.com/wonderland' },
          { song: 'Answer', url: 'https://example.com/answer' }
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bands', null, {});
  }
};
