const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pokemon_owned: {
    type: Array,
    required: true,
    default: [],
  },
});

module.exports = mongoose.model("trainer", trainerSchema);
