const { DataTypes } = require("sequelize");
const db = require("../database");

const Exercise = db.define("exercise", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  time: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Exercise;
