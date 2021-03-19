const express = require('express');
const app = express();

//--- 'HOME' ---//
app.get('/', (req, res) => {
    res.send({
        some: "HELLO"
    });
});

//--- RECIPES ---//
app.get('/recipes', (req, res) => {

});

app.post('/recipes', (req,res) => {

});

//--- RECIPES/ID ---//
app.get('/recipes/:id', (req, res) => {
    
});

app.put('/recipes/:id', (req,res) => {

});

app.delete('/recipes/:id', (req,res) => {

});

//--- RECIPES/ID/INGREDIENTS ---//
app.get('/recipes/:id/ingredients', (req, res) => {
    
});

app.post('/recipes/:id/ingredients', (req,res) => {

});

//--- RECIPES/ID/INGREDIENTS/ID ---//
app.get('/recipes/:id/ingredients/:id', (req, res) => {
    
});

app.put('/recipes/:id/ingredients/:id', (req,res) => {

});

app.delete('/recipes/:id/ingredients/:id', (req,res) => {

});

//---  ---//
app.listen(8080, () => {
  console.log('Serveur à l\'écoute');
});
