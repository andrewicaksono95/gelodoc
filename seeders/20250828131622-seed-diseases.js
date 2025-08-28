'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Diseases', [
    {
      name: 'Influenza',
      description: 'Infeksi saluran pernapasan akibat virus.',
      level: 1,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Demam Berdarah',
      description: 'Infeksi virus dengue dari gigitan nyamuk Aedes.',
      level: 3,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Migrain',
      description: 'Sakit kepala berulang di satu sisi kepala.',
      level: 2,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'COVID-19',
      description: 'Penyakit infeksi saluran pernapasan oleh virus corona',
      level: 3,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Diseases', null, {})
  }
};
