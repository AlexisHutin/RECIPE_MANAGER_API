const Recipe = require('../models/recipe');

module.exports = (req, res, next) => {
  try {

    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      Recipe.findOne({
        _id: req.params.id
      }).then(
        (recipe) => {
          if (recipe.userId == req.body.userId) {
            next();
          } else {
            res.status(401).json({
              error: 'Its not your recipe'
            });
          }
        }
      )
    }
    else {
      res.status(401).json({
        error: 'Invalid _id !'
      });
    }

  } catch {
    res.status(401).json({
      error: 'Invalid request!'
    });
  }
};
