# RECIPE_MANAGER_API
Web Service and PersistenceDevelopment Project

## SPECIFICATION

---

Your company just signed a contract for developing a REST Web API:MyRecipeManager.
The purpose of this web serviceis simple:Createand manage cooking recipes.
Only registered client should be able to access the API. For that purpose, it must implement OAUTH 2.0authentication protocol.
A recipe is composed of a title, description, cooking instructions,estimated time of preparation, difficulty level, creationdate, and a list of ingredients.
Ingredients will be composed at least of a name and a price.
As a young startup, your team is exclusively composed of the CEO and the developing team that you will compose.
This project must be done by groups, each containing 1to 3students. Working in a bigger group will be sanctioned by penalty points.
You must use an ORM persistence framework. 
Feel free to use any programming language you feel comfortable with. 

Be sure to create a REST Client test file using Postman or Insomnia (or similar)
Your API must be composed of the following endpoints:
- /recipes
-   GET: Get all recipeso
  - POST: Add a new recipe
- / recipes/{id}
  - GET: Get recipe with id {id}
  - PUT:Update recipe with id {id}
  - DELETE: Remove recipe with id {id}
- /recipes/{id}/ingredients
  - GET: Get all ingredients for recipe with id {id}
  - POST: Add ingredient for recipe with id {id}
- /recipes/{id}/ingredients/{r_id}
  - GET: Get ingredient with id {r_id} for recipe with id {id}
  - PUT: Update ingredient with id {r_id} for recipe with id {id}
  - DELETE: Removeingredient with id {r_id} for recipe with id {id}

Data must be formatted in JSON.
Users should only access their own recipes and ingredients.

---
