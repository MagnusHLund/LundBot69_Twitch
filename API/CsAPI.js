const express = require('express');
const router = express.Router();
const db = require('./Database');

router.post('/api/login', (req, res) => {
    const { inviteCode } = req.body;

    // Replace 'your_query' with your SQL query to check the invite code
    const query = 'SELECT Username FROM creators WHERE InviteCode = ?';

    db.query(query, [inviteCode], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            if (results.length > 0) {
                const username = results[0].Username;
                res.status(200).json({ success: true, message: 'Login successful', username: username });
            } else {
                res.status(401).json({ success: false, message: 'Invalid invite code' });
            }
        }
    });
});

router.get('/api/someendpoint', (req, res) => {
    res.json({ message: 'This is a GET request response' });
});

router.get('/api/getData', (req, res) => {
    // Replace 'your_query' with your SQL query to fetch data from the database
    const query = 'SELECT * FROM Creators';

    db.query(query, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // Process the 'results' as needed
            res.status(200).json(results);
        }
    });
});

module.exports = router;
