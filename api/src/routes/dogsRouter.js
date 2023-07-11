const { Router } = require("express");
const {
  getAllDogsHandler,
  getByIdHandler,
  // getByNameHandler,
  postDogHandler,
} = require("../handlers/dogsHandlers");

const dogsRouter = Router();

// dogsRouter.use("/name", getByNameHandler);
dogsRouter.use("/createDog", postDogHandler);
dogsRouter.use("/:id", getByIdHandler);
dogsRouter.use("/", getAllDogsHandler);

module.exports = dogsRouter;

//dogsRouter.use("/",getDogsHandler)
