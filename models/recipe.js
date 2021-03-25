const mongoose = require("mongoose");



const recipeSchema = mongoose.Schema({
  name: String,
  instruction: String,
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipes", recipeSchema);