const PORT = process.env.PORT || 3000;
const app = require("./app");
const { db } = require("./db");

db.sync().then(() => {
  console.log("db synced");
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
});
