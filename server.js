const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon');



app.use(bodyParser({extended: true}))

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/pokemon', (req, res) => {
    res.send(pokemon);
});





app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

