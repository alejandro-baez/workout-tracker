const { db, User, Exercise } = require("./server/db/index");

const seed = async () => {
  try {
    await db.sync({ force: true });

    //creating user

    const alex = await User.create({
      name: "Alex",
      age: 22,
    });

    await Exercise.create({
      name: "Situp",
      time: 2,
      userId: alex.id,
    });

    db.close();
    console.log("Seeding Successful! Database has info!");
  } catch (err) {
    console.error("Something went wrong");
    console.error(err);
    db.close();
  }
};

seed();
