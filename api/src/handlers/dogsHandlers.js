const {
  getAllDogs,
  getById,
  postDog,
} = require("../controllers/dogsControllers");

const getAllDogsHandler = async (req, res) => {
  const name = req.query.name;

  try {
    let allDogs = await getAllDogs(name);
    res.status(200).json(allDogs);
  } catch (error) {
    res.status(400).json({ message: "Dogs not found" });
  };
};

const getByIdHandler = async (req, res) => {
  const id = req.params.id;

  try {
    let dogById = await getById(id);
    res.status(200).json(dogById);
  } catch (error) {
    res.status(400).json({ message: "Dog not found with that id" });
  }
};

const postDogHandler = async (req, res) => {
  const {
    name,
    heightMin,
    heightMax,
    weightMin,
    weightMax,
    life_span,
    temperaments,
  } = req.body;

  try {
    let dogCreated = await postDog({
      name,
      heightMin,
      heightMax,
      weightMin,
      weightMax,
      life_span,
      temperaments,
    });
    res.status(200).json(dogCreated);
  } catch (error) {
    res.status(400).json({ message: "Couldnt create the dog" });
  }
};

module.exports = {
  getAllDogsHandler,
  getByIdHandler,
  postDogHandler,
};
