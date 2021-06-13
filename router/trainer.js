const express = require("express");
const router = express.Router();
const Trainer = require("../Schema/trainer");

router.get("/", async (req, res) => {
  const search = req.query.search;
  try {
    const data = await Trainer.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const new_trainer = new Trainer({ name: req.body.name });
  try {
    const newTrainer = await new_trainer.save();
    res.status(201).json(newTrainer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  let update = null;

  if (req.body.method === "add") {
    update = { $push: { pokemon_owned: req.body.pokemon } };
  } else if (req.body.method === "remove") {
    update = { $pull: { pokemon_owned: req.body.pokemon } };
  } else {
    res.status(400).json({ message: "Invalid method" });
  }
  try {
    const data = await Trainer.findByIdAndUpdate(id, update, { new: true });
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Trainer.findById(req.params.id);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Trainer.findByIdAndDelete(req.params.id);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
