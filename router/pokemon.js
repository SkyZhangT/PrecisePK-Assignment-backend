const express = require("express");
const Pokemon = require("../Schema/pokemon");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Pokemon.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const new_pokemon = new Pokemon({
    id: req.body.id,
    name: req.body.name,
    move: req.body.move,
    type: req.body.type,
  });
  try {
    const newPokemon = await new_pokemon.save();
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", (req, res) => {});

router.post("/:id", (req, res) => {});

module.exports = router;
