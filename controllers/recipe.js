const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient');
const fs = require('fs');

exports.createRecipe = (req, res, next) => {
  let recipe = new Recipe();


  const { name, instruction} = req.body;

  recipe.name = req.body.name;
  recipe.instruction = req.body.instruction;
  recipe.userId = req.body.userId;
  ingredients = req.body.ingredients;
  
  recipe.save().then(
    () => {
      ingredients.forEach(element => {

        let ingredient = new Ingredient();
        ingredient.name = element.name;
        ingredient.quantity = element.quantity;
        ingredient.recipeId = recipe.id;
        ingredient.save();

      });
      res.status(201).json({
        message: 'Recipe saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllRecipe = (req, res, next) => {
  Recipe.find(
    {userId: req.body.userId}
  ).then(
    (recipe) => {
      res.status(200).json({
        recipe: recipe
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneRecipe = (req, res, next) => {
  Recipe.findOne(
    {
      _id: req.params.id,
      userId: req.body.userId
    }
  ).then(
    (recipe) => {
      res.status(200).json({
        recipe: recipe
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.modifyRecipe = (req, res, next) => {
  let recipe = new Recipe({ _id: req.params.id });

  recipe.name = req.body.name;
  recipe.instruction = req.body.instruction;


  Recipe.updateOne({_id: req.params.id}, recipe).then(
    () => {
      res.status(201).json({
        message: 'Recipe updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteRecipe = (req, res, next) => {
  Recipe.deleteOne({
    _id: req.params.id
  }).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
