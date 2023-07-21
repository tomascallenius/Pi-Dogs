const { Dog, Temperament } = require("../db");
const axios = require("axios");
// require("dotenv").config();
// const { API_KEY } = process.env;

//se inicializa una funcion que sirve para purgar los datos inutiles que nos devuelve la base de datos. 
const createDogObjDB = (res) => {
  let {
    id,
    name,
    image,
    heightMin,
    heightMax,
    weightMin,
    weightMax,
    life_span,
    Temperaments,
    createdInDb,
  } = res[0].dataValues;
  let dogTemperaments = Temperaments.map((data) => data.dataValues.name); //como Temperaments es un array se purga la informacion aparte del resto. 
  dogTemperaments = [...dogTemperaments].join(); //luego se pasan los temperamentos de tipo de dato array a string para poder trabajarlos mas limpiamente.

  return (dogObj = {
    id,
    name,
    image,
    heightMin,
    heightMax,
    weightMin,                      //y se retorna el objeto resultante.
    weightMax,
    life_span,
    temperament: dogTemperaments,
    createdInDb,
  });
};

const getAllDogsAPI = async () => {
  try {
    const allDogsAPI = (
      await axios.get(
        `https://api.thedogapi.com/v1/breeds/?limit=100` //&x-api-key=${API_KEY}
      )
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
        life_span: dog.life_span,
      };
    });
    return dogsAPI;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllDogsDB = async () => {
  const DogsDb = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  }).then((response) => {
    return response.map((res) => createDogObjDB([res])); //se maneja la promesa, se mapea cada dog y se le pasa la funcion createDogObjDB para limpiar los datos.
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

//recibimos las propiedades del body.
const postDog = async ({
  name,
  heightMin,
  heightMax,
  weightMin,
  weightMax,
  life_span,
  temperaments,
 
}) => {
//se pasan por parametro al .create para que se cree un perro con las propiedades.
  const dogCreated = await Dog.create({
    name,
    image:"https://img.freepik.com/foto-gratis/disparo-enfoque-selectivo-adorable-golden-retriever-al-aire-libre_181624-45215.jpg?w=996",
    heightMin,
    heightMax,
    weightMin,
    weightMax,
    life_span,
  });
//se itera sobre los temperamentos y los busca en la tabla Temperament para obtener el id de cada uno.
  for (let i = 0; i < temperaments.length; i++) {
    const temp = await Temperament.findAll({
      where: {
        name: temperaments[i],
      },
    });
    dogCreated.addTemperament(temp); //al perro creado se lo relaciona con el id de cada temperamento.
  }
};

module.exports = { getAllDogs, getById, postDog };
