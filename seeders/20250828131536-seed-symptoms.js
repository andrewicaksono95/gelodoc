'use strict';

const { QueryInterface } = require('sequelize');

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
   await queryInterface.bulkInsert('Symptoms', [
    {
      name: 'Demam',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Batuk',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sakit Kepala',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mual',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sesak Napas',
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
    await queryInterface.bulkDelete('Symptoms', null, {})
  }
};
