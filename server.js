const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const Pokemon = require('./models/pokemon');
app.use(express.static(__dirname + '/public'));




app.use(bodyParser({extended: true}))
;

app.get('/', (req, res) => {
    res.render('index.ejs',{
        'pokemon': Pokemon
    })
});






app.get('/pokemon', (req, res) => {
    res.send(Pokemon);
});





app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

