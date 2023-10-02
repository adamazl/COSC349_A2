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
    database: 'recipes_db'
});


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// TODO: Add routes here

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
