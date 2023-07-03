// const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getAllDogs = async () => {
  const allDogs = (await axios.get(`https://api.thedogapi.com/v1/breeds`)).data;

  return allDogs;
};
const getById = async () => {};
const getByName = async () => {};
const postDog = async () => {};
module.exports = { getAllDogs, getById, getByName, postDog };
