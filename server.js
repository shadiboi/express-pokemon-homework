const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = 3000;
const Pokemon = require('./models/pokemon');

app.use(express.static(__dirname + '/public'));
app.use(morgan('short'));
app.use(bodyParser({extended: true}));


app.post('/pokemon', (req,res) => {
    console.log('made it to create route')
    console.log(req.body)
    Pokemon.push(req.body)
    res.redirect('/pokemon')

})


app.get('/pokemon', (req, res) => {
    res.render('index.ejs',{
        'pokemon': Pokemon
    })
});

app.get('/pokemon/new', (req,res) => {
    res.render('new.ejs', {
    })
})

app.get('/:id', (req, res) => {
    res.render('show.ejs', {
        pokemon: Pokemon[req.params.id]
    })
});

app.get('/', (req, res) => {
    res.send(Pokemon);
});










app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

