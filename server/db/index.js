const db = require("./database");

const Exercise = require("./models/Exercises");
const User = require("./models/Users");

//associations go here
User.hasMany(Exercise);
Exercise.belongsTo(User);

module.exports = {
  db,
  Exercise,
  User,
};
