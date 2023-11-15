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