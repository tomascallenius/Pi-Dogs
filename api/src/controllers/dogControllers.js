const axios = require("axios");
// require("dotenv").config();
// const { API_KEY } = process.env;
const { Dogs, Temperaments } = require("../db");

const getAllDogs = async () => {
  const allDogs = (
    await axios.get("https://api.thedogapi.com/v1/breeds/?limit=100")
  ).data;

  return allDogs;
};

const getById = async (source, id) => {
  // let dataFormat;
  if (source === "api") {
    const dogAPI = (
      await axios.get(
        `https://api.thedogapi.com/v1/breeds/${id}` //?x-api-key=${API_KEY}  ó  '?api - key=${ API_KEY }......
      )
    ).data;
    return dogAPI;
  }
};

const getByName = async (nameQ) => {
  let dogsAPI = (
    await axios.get("https://api.thedogapi.com/v1/breeds/?limit=100")
  ).data;
  const filterdogs = dogsAPI?.filter((dog) =>
    dog.name.toLowerCase().includes(nameQ.toLowerCase())
  );
  return filterdogs;
};

const postDog = async ({
  name,
  minHeight,
  maxHeight,
  minWeigth,
  maxWeigth,
  life_span,
  temperaments,
}) => {
  const dogCreated = await Dogs.create({
    name,
    minHeight,
    maxHeight,
    minWeigth,
    maxWeigth,
    life_span,
  });
  for (let i = 0; i < temperaments.length; i++) {
    const temp = await Temperaments.findAll({
      where: {
        id: temperaments[i],
      }
    }) //seguir con el post 
  }
};

module.exports = { getAllDogs, getById, getByName, postDog };
