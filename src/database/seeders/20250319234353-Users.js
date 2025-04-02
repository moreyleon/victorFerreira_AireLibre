'use strict';

/** @type {import('sequelize-cli').Migration} */

const path = require("path");
const direction = path.join(__dirname, "../../data/users.json");
const { read, parse } = require("../../data/filesystem");
const bcrypt = require("bcrypt");
const users = parse(read(direction));



users.map((user) => {
  user.createdAt = new Date();
  user.updatedAt = new Date();

 user.password = bcrypt.hashSync(user.password, 10);
});


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", users, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
