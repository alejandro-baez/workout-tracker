const db = require("./database");

const Exercise = require("./models/Exercises");
const User = require("./models/Users");

//associations go here
Exercise.belongsTo(User);
User.hasMany(Exercise);

module.exports = {
  db,
  Exercise,
  User,
};
