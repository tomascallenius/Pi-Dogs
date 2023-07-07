const {
  getAllDogs,
  getById,
  getByName,
  postDog,
} = require("../controllers/dogControllers");

const getAllDogsHandler = async (req, res) => {
  try {
    let allDogs = await getAllDogs();
    res.status(200).json(allDogs);
  } catch (error) {
    res.status(400).json({ message: "No se encontraron los perrunos" });
  }
};

const getByIdHandler = async (req, res) => {
  const id = req.params.id;
  let source = isNaN(id) ? "db" : "api";

  try {
    let dogById = await getById(source, id);
    res.status(200).json(dogById);
  } catch (error) {
    res.status(400).json({ message: "No se encontró un perro con ese id" });
  }
};

const getByNameHandler = async (req, res) => {
  const name = req.query.name;
  try {
    let dogByName = await getByName(name);
    res.status(200).json(dogByName);
  } catch (error) {
    res.status(400).json({ message: "No se encontró un perro con ese nombre" });
  }
};

const postDogHandler = async (req, res) => {
  const { name, minHeight, maxHeight, minWeigth, maxWeigth, life_span } =
    req.body;
  try {
    let dogCreated = await postDog(
      name,
      minHeight,
      maxHeight,
      minWeigth,
      maxWeigth,
      life_span
    );
    res.status(200).json(dogCreated);
  } catch (error) {
    res.status(400).json({ message: "No se pudo crear el perro" });
  }
};

module.exports = {
  getAllDogsHandler,
  getByIdHandler,
  getByNameHandler,
  postDogHandler,
};
