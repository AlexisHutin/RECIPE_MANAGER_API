const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    instruction: String,
    userId : {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);
