require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

app.post('/api/login', (req, res) => {
    const { password } = req.body;

    // Check the password in the database
    const query = 'SELECT * FROM invite_passwords WHERE password = ?';

    db.query(query, [password], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            if (results.length > 0) {
                res.status(200).json({ success: true, message: 'Login successful' });
            } else {
                res.status(401).json({ success: false, message: 'Invalid password' });
            }
        }
    });
});

app.listen(3420, () => {
    console.log('API is APIing on port 3420');
});
