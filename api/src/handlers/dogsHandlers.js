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
    res.status(400).json({ message: "No se encontraron los perrunos" });
  }
};

const getByIdHandler = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  // let source = isNaN(id) ? "db" : "api";

  try {
    let dogById = await getById(id);
    res.status(200).json(dogById);
  } catch (error) {
    res.status(400).json({ message: "No se encontró un perro con ese id" });
  }
};

// const getByNameHandler = async (req, res) => {
//   const name = req.query.name;
//   try {
//     let dogByName = await getByName(name);
//     res.status(200).json(dogByName);
//   } catch (error) {
//     res.status(400).json({ message: "No se encontró un perro con ese nombre" });
//   }
// };

const postDogHandler = async (req, res) => {
  const {
    name,
    heightMin,
    heightMax,
    weightMin,
    weightMax,
    life_span,
    temperaments,
    createdInDb,
  } = req.body;
  console.log(req.body);
  try {
    let dogCreated = await postDog({
      name,
      heightMin,
      heightMax,
      weightMin,
      weightMax,
      life_span,
      temperaments,
      createdInDb,
    });
    res.status(200).json("The dog has been created");
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "No se pudo crear el perro" });
  }
};

module.exports = {
  getAllDogsHandler,
  getByIdHandler,
  postDogHandler,
};
