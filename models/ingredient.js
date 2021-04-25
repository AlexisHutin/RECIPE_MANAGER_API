const mongoose = require("mongoose");

const ingredientSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: Number,
    recipeId : {type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ingredient", ingredientSchema);
