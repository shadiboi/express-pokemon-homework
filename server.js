const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;



app.use(bodyParser({extended: true}))



app.get('/', (req, res) => {
    res.send('Hello World')
});










app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

