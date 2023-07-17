const axios = require("axios");
// require("dotenv").config();
// const { API_KEY } = process.env;
const { Dog, Temperament } = require("../db");

const createDogObjDB = (res) => {
  let {
    id,
    name,
    image,
    heightMin,
    heightMax,
    weightMin,
    weightMax,
    lifeSpanMin,
    lifeSpanMax,
    Temperaments,
    // createdInDb,
  } = res[0].dataValues;

  let dogTemperaments = Temperaments.map((data) => data.dataValues.name);
  dogTemperaments = [...dogTemperaments].join();

  return (dogObj = {
    id,
    name,
    image,
    heightMin,
    heightMax,
    weightMin,
    weightMax,
    lifeSpanMin,
    lifeSpanMax,
    temperament: dogTemperaments,
    // createdInDb,
  });
};

const getAllDogsAPI = async () => {
  try {
    const allDogsAPI = (
      await axios.get(`https://api.thedogapi.com/v1/breeds/?limit=104`)
    ).data;
    const dogsAPI = await allDogsAPI.map((dog) => {
      return {
        id: dog.id,
        name: dog.name,
        heightMin: dog.height.metric.split(" -")[0],
        heightMax: dog.height.metric.split("- ")[1],
        weightMin: dog.weight.metric.split(" -")[0],
        weightMax: dog.weight.metric.split("- ")[1],
        temperament: dog.temperament,
        image: dog.image.url,
        life_Span: dog.life_span,
      };
    });
    return dogsAPI;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllDogsDB = async () => {
  const DogsDb = /*return*/ await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  }).then((response) => {
    return response.map((res) => createDogObjDB([res]));
  });
  return DogsDb;
};

const getAllDogs = async (name) => {
  const dogsAPI = await getAllDogsAPI();
  const dogsDB = await getAllDogsDB();
  const getAllDogs = dogsAPI.concat(dogsDB);

  let filterDogByName = null;
  if (name) {
    filterDogByName = getAllDogs.filter((dog) =>
      dog.name.toLowerCase().includes(name.toLowerCase())
    );
    // if (oneDog.length === 0) return "No dogs with that name found";
    return filterDogByName;
  }
  return await getAllDogs;
};

const getById = async (id) => {
  const allDogs = await getAllDogs();
  const dogsById = await allDogs.filter((dog) => dog.id == id);

  if (dogsById.length === 0) return "No dogs found with that ID";
  return dogsById;
};


const postDog = async ({
  name,
  heightMin,
  heightMax,
  weightMin,
  weightMax,
  life_span,
  temperaments,
}) => {
  console.log(name);
  const dogCreated = await Dog.create({
    name,
    heightMin,
    heightMax,
    weightMin,
    weightMax,
    life_span,
  });
  for (let i = 0; i < temperaments.length; i++) {
    console.log(temperaments[i])
    const temp = await Temperament.findAll({
      where: {
        name: temperaments[i],
      },
    });
    dogCreated.addTemperament(temp);
  }
};

module.exports = { getAllDogs, getById, postDog };
