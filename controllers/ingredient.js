const Ingredient = require('../models/ingredient');
const Recipe = require('../models/recipe');
const fs = require('fs');

exports.createIngredient = (req, res, next) => {
  let ingredient = new Ingredient();

  const {
    name,
    quantity
  } = req.body;

  ingredient.name = req.body.name;
  ingredient.quantity = req.body.quantity;
  ingredient.recipeId = req.params.id;

  ingredient.save().then(
    () => {
      res.status(201).json({
        message: 'Ingredient saved successfully!'
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

exports.getAllIngredient = (req, res, next) => {
  Ingredient.find({
    recipeId: req.params.id
  }).then(
    (ingredient) => {
      res.status(200).json({
        ingredient: ingredient
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

exports.getOneIngredient = (req, res, next) => {
  Ingredient.findOne({
    _id: req.params.r_id,
    recipeId: req.params.id
  }).then(
    (ingredient) => {
      res.status(200).json({
        ingredient: ingredient
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

exports.modifyIngredient = (req, res, next) => {
  let ingredient = new Ingredient({ _id: req.params.r_id });

  ingredient.name = req.body.name;
  ingredient.quantity = req.body.quantity;


  Ingredient.updateOne({_id: req.params.r_id}, ingredient).then(
    () => {
      res.status(201).json({
        message: 'Ingredient updated successfully!'
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

exports.deleteIngredient = (req, res, next) => {
  Ingredient.deleteOne({
    _id: req.params.r_id
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
