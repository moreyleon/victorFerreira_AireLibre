'use strict';

const productsJson = require('../../data/products.json');
const products = productsJson.map(({ name, description, price,image,offers,news,categoryId,brandId,size }) => {
  return {
    name,
    description,
    price,
    categoryId,
    brandId,
    image,
    size,
    offers,
    news,
    createdAt: new Date,
    updatedAt: new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products", products,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});

  }
};
