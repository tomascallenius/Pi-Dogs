const server = require("./src/app.js");
const {
  getAllTemperaments,
} = require("./src/controllers/temperamentsControllers.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    getAllTemperaments();
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
