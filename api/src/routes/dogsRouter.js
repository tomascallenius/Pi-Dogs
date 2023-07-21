const { Router } = require("express");
const {
  getAllDogsHandler,
  getByIdHandler,
  postDogHandler,
} = require("../handlers/dogsHandlers");

const dogsRouter = Router();

dogsRouter.use("/createDog", postDogHandler);
dogsRouter.use("/:id", getByIdHandler);
dogsRouter.use("/", getAllDogsHandler);

module.exports = dogsRouter;