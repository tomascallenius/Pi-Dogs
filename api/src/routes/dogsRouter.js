const { Router } = require("express");
const {
  getAllDogsHandler,
  getByIdHandler,
  getByNameHandler,
  postDogHandler,
} = require("../handlers/dogsHandlers");

const dogsRouter = Router();

dogsRouter.use("/name", getByNameHandler);
dogsRouter.use("/:id", getByIdHandler);
dogsRouter.use("/", getAllDogsHandler);
dogsRouter.use("/createDog", postDogHandler);

module.exports = dogsRouter;
