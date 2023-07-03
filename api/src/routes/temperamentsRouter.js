const { Router } = require("express");
const { getTemperamentsHandler } = require("../handlers/temperamentsHandlers");
const temperamentsRouter = Router();
temperamentsRouter.use("/", getTemperamentsHandler);
module.exports = temperamentsRouter;
