const { Temperament } = require("../db");
const axios = require("axios");
// const { API_KEY } = process.env;

const getAllTemperaments = async () => {
  const allTemperaments = [];
  const alldogsAPI = (
    await axios("https://api.thedogapi.com/v1/breeds/?limit=100")
  ).data;
  const arrTempsAPI = alldogsAPI
    .map((dog) => dog.temperament)
    .join(", ")
    .split("");
  arrTempsAPI.forEach((temp) => {
    if (!allTemperaments.includes(temp)) allTemperaments.push(temp);
  });
  
  allTemperaments.sort();

  await Promise.all(
    allTemperaments.map((temperament) => {
      Temperament.findOrCreate({
        where: { name: temperament },
        defaults: { name: temperament },
      });
    })
  );

  const allTemperamentsDb = await Temperament.findAll();

  return allTemperamentsDb;

  //    await Temperament.Create(
  //     dietsDB.map((diet) => {
  //       //para agregar las dietas a la DB
  //       return {
  //         name: diet,
  //       };
  //     }),
  //     { ignoreDuplicates: true }
  //   );
};

module.exports = { getAllTemperaments };

// temperaments = temperamentsAPI.forEach((temp) => temp.diet);
