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
   await queryInterface.bulkInsert('DiseaseSymptoms', [
    {diseaseId: 1, symptomId: 1, createdAt: new Date(), updatedAt: new Date()},
    {diseaseId: 1, symptomId: 2, createdAt: new Date(), updatedAt: new Date()},
    {diseaseId: 1, symptomId: 3, createdAt: new Date(), updatedAt: new Date()},
    {diseaseId: 1, symptomId: 4, createdAt: new Date(), updatedAt: new Date()},
    {diseaseId: 1, symptomId: 5, createdAt: new Date(), updatedAt: new Date()},

    {diseaseId: 2, symptomId: 1, createdAt: new Date(), updatedAt: new Date()},
    {diseaseId: 2, symptomId: 3, createdAt: new Date(), updatedAt: new Date()},
    {diseaseId: 2, symptomId: 4, createdAt: new Date(), updatedAt: new Date()},

    {diseaseId: 3, symptomId: 3, createdAt: new Date(), updatedAt: new Date()},
    {diseaseId: 3, symptomId: 4, createdAt: new Date(), updatedAt: new Date()},

    {diseaseId: 4, symptomId: 1, createdAt: new Date(), updatedAt: new Date()},
    {diseaseId: 4, symptomId: 2, createdAt: new Date(), updatedAt: new Date()},
    {diseaseId: 4, symptomId: 3, createdAt: new Date(), updatedAt: new Date()},
    {diseaseId: 4, symptomId: 5, createdAt: new Date(), updatedAt: new Date()},
   ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('DiseaseSymptoms', null, {})
  }
};
