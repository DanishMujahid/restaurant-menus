const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

// TODO - create a Restaurant model
const Restaurant = sequelize.define('restaurant', {
    name: {
        type: Sequelize.STRING,
    },
    cuisine: {
        type: Sequelize.STRING,
    },
    location: {
        type: Sequelize.STRING,
    },
    rating: {
        type: Sequelize.INTEGER,
    },
});

module.exports = {Restaurant};