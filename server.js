const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const Pokemon = require('./models/pokemon');

app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(morgan('short'));
app.use(bodyParser({extended: true}));



app.put('/pokemon/:id', (req,res) =>{
    Pokemon[req.params.id] = req.body;
    res.redirect('/pokemon')
})


app.get('/pokemon/:id/edit', (req,res) => {
    res.render('edit.ejs', {
        pokemon: Pokemon[req.params.id],
        id: req.params.id
    })
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


app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokemon: Pokemon[req.params.id]
    })
});

app.get('/', (req, res) => {
    res.send(Pokemon);
});

app.post('/pokemon', (req,res) => {
    console.log('made it to create route')
    console.log(req.body)
    Pokemon.push(req.body)
    res.redirect('/pokemon')

})


app.delete('/pokemon/:id', (req,res) => {
    console.log('delete route in par')
    Pokemon.splice(req.params.id,1);
    res.redirect('/pokemon');
    
})








app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

