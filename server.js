const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/submit', (req, res) => {
    const data = req.body;
    // Store the data in memory or in a database
    console.log("Received data:", data);
    res.sendStatus(200);
});

app.listen(3000, () => console.log('Server running on port 3000'));
