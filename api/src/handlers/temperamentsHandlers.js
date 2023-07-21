const {
  getAllTemperaments,
} = require("../controllers/temperamentsControllers");

const getTemperamentsHandler = async (req, res) => {
  try {
    const allTemperaments = await getAllTemperaments();
    res.status(200).json(allTemperaments);
  } catch (error) {
    res.status(400).json({ message: "Temperaments not found" });
  }
};
module.exports = { getTemperamentsHandler };
