const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const botApi = require('./BotAPI.js')
const CsApi = require('./CsAPI.js')

app.use(bodyParser.json());

app.use(botApi)
app.use(CsApi)

app.listen(3420, () => {
    console.log('API is APIing on port 3420');
});


// Bot (for twitch, uses API to get data)
// WPF app (To see bot data from API)
// API (To communicate between bot/WPF to database)
// Database (uses API to share data)