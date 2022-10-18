const {Sequelize} = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/workout_db")


module.exports = db;