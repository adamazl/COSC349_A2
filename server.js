const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'database-1.crebsosieeok.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Quack1nce4^',
    database: 'database-1'
});


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// TODO: Add routes here
// Add a new recipe
app.post('/addRecipe', (req, res) => {
    const { title, ingredients, instructions } = req.body;
    const query = 'INSERT INTO recipes (title, ingredients, instructions) VALUES (?, ?, ?)';
    pool.query(query, [title, ingredients, instructions], (error) => {
        if (error) throw error;
        res.send({ success: true });
    });
});

// Fetch all recipes
app.get('/getRecipes', (req, res) => {
    pool.query('SELECT * FROM recipes', (error, results) => {
        if (error) throw error;
        res.send(results);
    });
});

// Delete a recipe
app.delete('/deleteRecipe/:id', (req, res) => {
    const recipeId = req.params.id;
    pool.query('DELETE FROM recipes WHERE id = ?', [recipeId], (error) => {
        if (error) throw error;
        res.send({ success: true });
    });
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
