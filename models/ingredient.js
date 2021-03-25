const mongoose = require("mongoose");



const ingredientSchema = mongoose.Schema({
    name: String,
    recipeId: {type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'}
    },
  { timestamps: true }
);

module.exports = mongoose.model("Ingredient", ingredientSchema);