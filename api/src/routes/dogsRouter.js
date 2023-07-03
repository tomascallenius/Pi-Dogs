const { Router } = require("express");
const {
  getAllDogsHandler,
  getByIdHandler,
  getByNameHandler,
  postDogHandler,
} = require("../handlers/dogsHandlers");

const dogsRouter = Router();

dogsRouter.use("/", getAllDogsHandler);
dogsRouter.use("/:id", getByIdHandler);
dogsRouter.use("/name?=name", getByNameHandler);
dogsRouter.use("/createDog", postDogHandler);

module.exports = dogsRouter;
