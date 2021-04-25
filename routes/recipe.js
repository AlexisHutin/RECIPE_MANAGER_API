const express = require('express');
const router = express.Router();

const recipeCtrl = require('../controllers/recipe');
const ingredientCtrl = require('../controllers/ingredient');
const auth = require('../middleware/auth');
const checkRecipe = require('../middleware/myRecipe');

// /recipes
router.get('/', auth, recipeCtrl.getAllRecipe);
router.post('/', auth, recipeCtrl.createRecipe);

// /recipes/{id}
router.get('/:id', auth, checkRecipe, recipeCtrl.getOneRecipe);
router.put('/:id', auth, checkRecipe, recipeCtrl.modifyRecipe);
router.delete('/:id', auth, checkRecipe, recipeCtrl.deleteRecipe);

// /recipes/{id}/ingredients
router.get('/:id/ingredients', auth, checkRecipe, ingredientCtrl.getAllIngredient);
router.post('/:id/ingredients', auth, checkRecipe, ingredientCtrl.createIngredient);

// /recipes/{id}/ingredients/{r_id}
router.get('/:id/ingredients/:r_id', auth, checkRecipe, ingredientCtrl.getOneIngredient);
router.put('/:id/ingredients/:r_id', auth, checkRecipe, ingredientCtrl.modifyIngredient);
router.delete('/:id/ingredients/:r_id', auth, checkRecipe, ingredientCtrl.deleteIngredient);


module.exports = router;
