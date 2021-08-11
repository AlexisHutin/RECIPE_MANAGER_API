# RECIPE_MANAGER_API
Web Service and Persistence Development Project

## SPECIFICATION

---

Your company just signed a contract for developing a REST Web API : MyRecipeManager.
The purpose of this web serviceis simple : Create and manage cooking recipes.
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
  - GET: Get all recipeso
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
## Installation

This is a nodeJs/express application.

Clone this repo on your pc and run this commands

```
npm install 
```
The next step is to configure the database access. 
I choose MongoDb and Mongoose for this app 

To link the app with a data base you have to create a file named ```config.js```. 
You can duplicate ```config.exemple.js```.
And add this lines in it : 
```
{
  "ipBDD": "path To Your Bdd"
}
```

Now you can run the application with :
```
node run server.js 
```

Then you should be able to access the api with this url : 
```
localhost:3001/api
```
---

## Usage Instructuions

First you have to sigup with this end point : 

  ```
  api/user/signup
  ```
  ```
  body : 
  {
    "email": "mon@eamil.bzh" ,
    "password": "1234"
  }
  ```
  ```
  response : 
    - success : 
      {
        "message": "User added successfully!"
      }
  ```

Then you you can log you in with this end point : 

  ```
  api/user/login
  ```
  ```
  body : 
  {
    "email": "mon@eamil.bzh" ,
    "password": "1234"
  }
  ```
  ```
  response : 
    - success : 
      {
        "token": YOUR TOKEN
      }
  ```

When you are logged in you get a token.
In Postman you can use the token in the "auth" panel of your requests.
Chose "Bearer Token" and put it in the "token" field.

![image](https://user-images.githubusercontent.com/44839732/115994776-a71ac300-a5d8-11eb-9e3b-e8bb0fae13f3.png)


### Recipes
  - GET : Get all recipes
  ```
  /api/recipe/
  ```
  - POST : Add a new recipe
  ```
  /api/recipe/
  ```
  ```
  body : 
  {
    "name": "crazy recipe" ,
    "instruction": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ipsum non dui cursus posuere. Nunc at sodales nisl, ac sagittis tellus. Nunc ut turpis nulla. Ut non urna a elit viverra tincidunt ut vitae eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam accumsan felis sit amet accumsan. Phasellus eu libero ut dui dapibus blandit. Suspendisse sit amet malesuada leo. Etiam facilisis eleifend leo, nec tincidunt est tristique at. Aenean a risus at ex tempus pellentesque. Sed venenatis ex libero. In est eros, interdum vitae lobortis auctor, ultrices eget felis. ",

    "ingredients": [
        {
            "name": "poivre",
            "quantity": 10
        },
        {
            "name": "farine",
            "quantity": 300
        },
        {
            "name": "eau",
            "quantity": 200
        }
    ]
  }
  ```

### Recipes/{id}
  - GET : Get recipe with id {id}
  ```
  /api/recipe/[ID]
  ```
  - PUT : Update recipe with id {id}
  ```
  /api/recipe/[ID]
  ```
  ```
  body : 
  {
    "name": "Mega crazy recipe" ,
    "instruction": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ipsum non dui cursus posuere. Nunc at sodales nisl, ac sagittis tellus. Nunc ut turpis nulla. Ut non urna a elit viverra tincidunt ut vitae eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam accumsan felis sit amet accumsan. Phasellus eu libero ut dui dapibus blandit. Suspendisse sit amet malesuada leo. Etiam facilisis eleifend leo, nec tincidunt est tristique at. Aenean a risus at ex tempus pellentesque. Sed venenatis ex libero. In est eros, interdum vitae lobortis auctor, ultrices eget felis. "
}
  ```
  - DELETE : Remove recipe with id {id}
  ```
  /api/recipe/[ID]
  ```

### Recipes/{id}/ingredients
  - GET : Get all ingredients for recipe with id {id}
  ```
  /api/recipe/[ID]/ingredients/
  ```
  - POST : Add ingredient for recipe with id {id}
  ```
  /api/recipe/[ID]/ingredients/
  ```
  ```
  body : 
  {
    "name": "poivre",
    "quantity": 10
  }
  ```

### Recipes/{id}/ingredients/{r_id}
  - GET : Get ingredient with id {r_id} for recipe with id {id}
  ```
  /api/recipe/[ID]/ingredients/[ID]
  ```
  - PUT : Update ingredient with id {r_id} for recipe with id {id}
  ```
  /api/recipe/[ID]/ingredients/[ID]
  ```
 
  ```
  body : 
  {
    "name": "sel",
    "quantity": 10
  }
  ```
  - DELETE : Removeingredient with id {r_id} for recipe with id {id}
  ```
  /api/recipe/[ID]/ingredients/[ID]
  ```
